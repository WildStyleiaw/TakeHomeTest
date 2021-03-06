import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import FeedbackForm from '../FeedbackForm/FeedbackForm'
import CoreLayout from 'src/layouts/CoreLayout/CoreLayout'

export const QUERY = gql`
  query UserListQuery {
    userList {
      id
      email
      name
    }
  }
`
const CREATE_FEEDBACK_MUTATION = gql`
  mutation CreateFeedbackMutation($input: CreateFeedbackInput!) {
    createFeedback(input: $input) {
      id
      text
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ userList }) => {
  const [createFeedback, { loading, error }] = useMutation(
    CREATE_FEEDBACK_MUTATION,
    {
      onCompleted: () => {
        toast.success('Feedback created')
        navigate(routes.feedback())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )
  console.log(userList)
  const onSave = (input) => {
    createFeedback({ variables: { input } })
  }
  return (
    <CoreLayout>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h3 className="text-xl leading-6 font-medium text-gray-900">
            New Feedback
          </h3>
        </header>
        <div className="rw-segment-main">
          <FeedbackForm
            onSave={onSave}
            loading={loading}
            error={error}
            userList={userList}
          />
        </div>
      </div>
    </CoreLayout>
  )
}
