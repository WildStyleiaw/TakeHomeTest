import SingleUserCell from 'src/components/SingleUserCell'
import CoreLayout from 'src/layouts/CoreLayout/CoreLayout'

const SingleUserPage = ({ id }) => {
  return (
    <CoreLayout>
      <SingleUserCell id={id} />
    </CoreLayout>
  )
}

export default SingleUserPage
