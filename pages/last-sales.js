import { useState, useEffect } from 'react';
import Parse from 'parse';

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = 'fYBYIgt7jUjTpeVrer06mpll4G2bb8Ed7XTLsMm5';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'zcp4kj9FtBCxZje3oYhd5QtINYZMaVILHQ7SXoEo';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;
const LastSales = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [sales, setSales] = useState();
  useEffect(() => {
    setIsLoading(true);
    fetchSales().then((res) => {
      setSales(res);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!sales) {
    return <p>no data yet...</p>;
  }
  if (sales) {
    console.log('asdea', sales);
  }
  return (
    <ul>
      {sales &&
        sales.map((sale) => (
          <li>
            {sale.name} - ${sale.volume}
          </li>
        ))}
    </ul>
  );
};

export default LastSales;

async function fetchSales() {
  const query = new Parse.Query('sales');
  //   query.equalTo();
  const salesObjIds = await query.findAll();
  query.equalTo('objectId', salesObjIds[0].id);
  const firstObj = await query.first();
  query.equalTo('objectId', salesObjIds[1].id);
  const secondObj = await query.first();
  const array = [
    { name: firstObj.get('name'), volume: firstObj.get('volume') },
    { name: secondObj.get('name'), volume: secondObj.get('volume') },
  ];

  return array;
  //   const obj = { name: sale.get('name'), volume: sale.get('volume') };
  console.log(salesObjIds);
  console.log('arr : ', array);
}
