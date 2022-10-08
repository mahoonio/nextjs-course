import { useRouter } from 'next/router';

const ClientSpeceficProject = () => {
  const router = useRouter();
  return (
    <div>
      <h1>
        id: {router.query.id} and ClientSpeceficProject :{' '}
        {router.query.clientspeceficproject}
      </h1>
    </div>
  );
};

export default ClientSpeceficProject;
