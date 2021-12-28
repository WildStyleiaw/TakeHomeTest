import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import FeedbackForm from 'src/components/FeedbackForm'

const CREATE_FEEDBACK_MUTATION = gql`
  mutation CreateFeedbackMutation($input: CreateFeedbackInput!) {
    createFeedback(input: $input) {
      id
    }
  }
`

const NewFeedbackPage = () => {
  const [createFeedback, { loading, error }] = useMutation(
    CREATE_FEEDBACK_MUTATION,
    {
      onCompleted: () => {
        toast.success('Feedback created')
        navigate(routes.feedbacks())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createFeedback({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Feedback</h2>
      </header>
      <div className="rw-segment-main">
        <FeedbackForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewFeedbackPage
