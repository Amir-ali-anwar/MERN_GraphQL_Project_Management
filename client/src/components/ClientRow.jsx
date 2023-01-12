import {FaTrash} from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import {GET_CLIENTS} from '../queries/clientQueries'
import {DELETE_CLIENTS} from '../mutations/ClientMutations'
const ClientRow = ({name,email,phone,id}) => {
 const {deleteClient}= useMutation(DELETE_CLIENTS,{
  
  variables:{id},
  refetchQueries:[{query:GET_CLIENTS}]
 })
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <button className='btn btn-danger btn-sm' onClick={deleteClient}>
          <FaTrash/>
        </button>
      </td>
    </tr>
  )
}

export default ClientRow