import { useState, useEffect } from 'react';
import Parse from 'parse';
import useSWR from 'swr';

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = 'fYBYIgt7jUjTpeVrer06mpll4G2bb8Ed7XTLsMm5';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'zcp4kj9FtBCxZje3oYhd5QtINYZMaVILHQ7SXoEo';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;
const LastSales = () => {
  //   const [isLoading, setIsLoading] = useState(false);
  const [sales, setSales] = useState();

  const { data, error } = useSWR(
    'https://jsonplaceholder.typicode.com/users',
    (url) => {
      return fetch(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json());
    }
  );
  //   useEffect(() => {
  //     setIsLoading(true);
  //     fetchSales().then((res) => {
  //       setSales(res);
  //       setIsLoading(false);
  //     });
  //   }, []);

  useEffect(() => {
    if (data) {
      const transformedData = data.map((user) => ({
        name: user.name,
        volume: Math.round(Math.abs(user.address.geo.lat)),
      }));

      setSales(transformedData);
    }
  }, [data]);

  if (error) {
    return <p>failed to fetch</p>;
  }
  if (!data || !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
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
    {
      name: firstObj.get('name'),
      volume: firstObj.get('volume'),
      id: firstObj.id,
    },
    {
      name: secondObj.get('name'),
      volume: secondObj.get('volume'),
      id: secondObj.id,
    },
  ];

  return array;
  //   const obj = { name: sale.get('name'), volume: sale.get('volume') };
}
