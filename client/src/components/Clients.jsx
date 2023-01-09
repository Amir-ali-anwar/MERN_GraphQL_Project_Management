import {gql, useQuery} from '@apollo/client'

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
const clients = () => {
  const {data,loading,error}= useQuery(GET_Clients)
  return (
    <div>clients</div>
  )
}

export default clients