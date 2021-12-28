import CoreLayout from 'src/layouts/CoreLayout/CoreLayout'
import DeleteUserCell from 'src/components/DeleteUserCell'

const DeleteUserPage = ({ id }) => {
  return (
    <CoreLayout>
      <DeleteUserCell id={id} />
    </CoreLayout>
  )
}

export default DeleteUserPage
