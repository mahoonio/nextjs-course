import { useRouter } from 'next/router';
const ClientId = () => {
  const router = useRouter();
  const loadProjectHandler = () => {
    //load data or smth...
    // router.push('/clients/mah/alo-salam');
    //or
    router.push({
      pathname: '/clients/[id]/[clientspeceficproject]',
      query: {
        id: 'mah',
        clientspeceficproject: 'alo-salam',
      },
    });
    // replace method prevents coming back to last page.
  };
  return (
    <div>
      <h1> the id is : {router.query.id}</h1>
      <button onClick={loadProjectHandler}>load project of user</button>
    </div>
  );
};

export default ClientId;
