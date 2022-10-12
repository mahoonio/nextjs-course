import Link from 'next/link';

const HomePage = (props) => {
  const { products } = props;
  return (
    <div>
      <ul>
        {products.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const products = [{ id: 1, title: 'product 1' }];
  return { props: { products } };
}
export default HomePage;
