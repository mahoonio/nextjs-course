import Link from 'next/link';

const ClientsPage = () => {
  const clients = [
    { id: 'mah', name: 'mahan' },
    { id: 'roz', name: 'roozbeh' },
  ];
  return (
    <div>
      <h1>clients page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
