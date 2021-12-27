import SingleFeedbackCell from 'src/components/SingleFeedbackCell'
import CoreLayout from 'src/layouts/CoreLayout/CoreLayout'

const SingleFeedbackPage = ({ id }) => {
  return (
    <CoreLayout>
      <SingleFeedbackCell id={id} />
    </CoreLayout>
  )
}

export default SingleFeedbackPage
