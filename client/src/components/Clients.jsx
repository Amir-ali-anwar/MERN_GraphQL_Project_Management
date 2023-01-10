import {gql, useQuery} from '@apollo/client'
import ClientRow from './ClientRow'
const GET_Clients= gql`
query getClients {
  clients{
    id,
    name,
    email,
    phone
  }
}
`
const Clients = () => {
  const {data,loading,error}= useQuery(GET_Clients)
  if(loading) return <p>Loading....</p>
  if(error) return  <p>Something, went wrong</p>
  return (
   <>
   {
    !loading && !error &&(
      <table className='table table-striped'>
         <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
             data?.clients.map((client)=>(
              <ClientRow />
    )) 
            }
          </tbody>
      </table>
    )
   }
   </>
  )
}

export default Clients