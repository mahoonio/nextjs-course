import path from 'path';
import fs from 'fs/promises';
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
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return { props: { products: data.products } };
}
export default HomePage;
