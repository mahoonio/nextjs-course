import { useRouter } from 'next/router';
const PortfolioProjectPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>
        the dynamic portfolio project page with the project id of :{' '}
        {router.query.projectid}
      </h1>
    </div>
  );
};

export default PortfolioProjectPage;
