import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import FeedbackForm from '../FeedbackForm/FeedbackForm'

export const QUERY = gql`
  query EditFeedbackById($id: String!) {
    feedback: feedback(id: $id) {
      id
      text
      createdAt
      userId
    }
    userList {
      id
      email
      name
      insights {
        id
      }
    }
  }
`

const UPDATE_FEEDBACK_MUTATION = gql`
  mutation UpdateFeedbackMutation($id: String!, $input: UpdateFeedbackInput!) {
    updateFeedback(id: $id, input: $input) {
      id
      text
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ feedback, userList }) => {
  const [updateFeedback, { loading, error }] = useMutation(
    UPDATE_FEEDBACK_MUTATION,
    {
      onCompleted: () => {
        toast.success('Feedback updated')
        navigate(routes.feedback())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateFeedback({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <div className="px-2 py-2">
          <div className="text-center text-xl py-5 bg-grey-800 border ">
            Edit Feedback
          </div>
          <h3 className="text-xl leading-6 font-medium text-gray-900 py-3 ">
            Feedback ID: {feedback.id}
          </h3>
        </div>
      </header>
      <div className="rw-segment-main">
        <FeedbackForm
          feedback={feedback}
          onSave={onSave}
          error={error}
          loading={loading}
          userList={userList}
          userId={feedback.userId}
        />
      </div>
    </div>
  )
}
