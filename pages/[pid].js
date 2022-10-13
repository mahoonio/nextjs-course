import path from 'path';
import fs from 'fs/promises';
import { Fragment } from 'react';

const ProductDescription = (props) => {
  const { product } = props;
  if (!product) {
    return <p>Loading...</p>;
  }
  return (
    <Fragment>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </Fragment>
  );
};

const getData = async () => {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
};
export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;

  const data = await getData();

  const product = data.products.find((product) => product.id === +productId);
  if (!product) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      product: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.products.map((p) => p.id);
  const pathsWithParams = ids.map((id) => ({ params: { pid: id.toString() } }));

  return {
    paths: pathsWithParams,
    // [{ params: { pid: '1' } }],
    fallback: true,
  };
}
export default ProductDescription;
