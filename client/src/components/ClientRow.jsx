import {FaTrash} from 'react-icons/fa';
import { useMutation } from '@apollo/client';
const ClientRow = ({name,email,phone}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <button className='btn btn-danger btn-sm'>
          <FaTrash/>
        </button>
      </td>
    </tr>
  )
}

export default ClientRow