import path from 'path';
import fs from 'fs/promises';
import Link from 'next/link';
const HomePage = (props) => {
  const { products } = props;
  return (
    <div>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <Link href={`/products/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return { props: { products: data.products }, revalidate: 10 }; // on build time(production) the revalidate property
  //auto regenerates the pre rendered page and updates it
}
export default HomePage;
