import { useRouter } from 'next/router';
const ClientId = () => {
  const router = useRouter();
  return (
    <div>
      <h1> the id is : {router.query.id}</h1>
    </div>
  );
};

export default ClientId;
