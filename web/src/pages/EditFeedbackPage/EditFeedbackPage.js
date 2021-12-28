import CoreLayout from 'src/layouts/CoreLayout/CoreLayout'
import EditFeedbackCell from 'src/components/EditFeedbackCell'
const EditFeedbackPage = ({ id }) => {
  return (
    <>
      <CoreLayout>
        <EditFeedbackCell id={id} />
      </CoreLayout>
    </>
  )
}

export default EditFeedbackPage
