import path from 'path';
import fs from 'fs/promises';
import { Fragment } from 'react';

const ProductDescription = (props) => {
  const { product } = props;
  return (
    <Fragment>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

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
  return {
    paths: [
      { params: { pid: '1' } },
      { params: { pid: '2' } },
      { params: { pid: '3' } },
    ],
    fallback: false,
  };
}
export default ProductDescription;
