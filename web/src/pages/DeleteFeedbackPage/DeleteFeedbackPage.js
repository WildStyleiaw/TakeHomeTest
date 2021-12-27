import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import CoreLayout from 'src/layouts/CoreLayout/CoreLayout'
import DeleteFeedbackCell from 'src/components/DeleteFeedbackCell'

const DeleteFeedbackPage = ({ id }) => {
  return (
    <CoreLayout>
      <DeleteFeedbackCell id={id} />
    </CoreLayout>
  )
}

export default DeleteFeedbackPage
