import { gql, useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import Spinner from './Spinner'
const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`;
const Clients = () => {
  const { data, loading, error } = useQuery(GET_CLIENTS);
  console.log(error);
  if (loading) return <Spinner />;
  if (error) return <p>Something, went wrong</p>;
  return (
    <>
      {!loading && !error && (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.clients.map((client) => (
              <ClientRow  key={client.id}/>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Clients;
