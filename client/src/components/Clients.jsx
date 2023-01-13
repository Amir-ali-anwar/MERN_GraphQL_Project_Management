import {useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import Spinner from './Spinner'
import {GET_CLIENTS} from '../queries/clientQueries'
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
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data?.clients.map((client) => (
              <ClientRow  key={client.id} {...client}/>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Clients;
