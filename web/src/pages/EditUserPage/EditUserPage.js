import CoreLayout from 'src/layouts/CoreLayout/CoreLayout'
import EditUserCell from 'src/components/EditUserCell'
const EditUserPage = ({ id }) => {
  return (
    <>
      <CoreLayout>
        <EditUserCell id={id} />
      </CoreLayout>
    </>
  )
}

export default EditUserPage
