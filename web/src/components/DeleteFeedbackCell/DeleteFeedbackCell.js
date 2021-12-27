import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

export const QUERY = gql`
  query FindFeedbackById($id: String!) {
    feedback: feedback(id: $id) {
      id
      text
      createdAt
    }
  }
`
const DELETE_FEEDBACK_MUTATION = gql`
  mutation DeleteFeedbackMutation($id: String!) {
    deleteFeedback(id: $id) {
      id
    }
  }
`

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const Feedback = ({ feedback }) => {
  const [deleteFeedback] = useMutation(DELETE_FEEDBACK_MUTATION, {
    onCompleted: () => {
      toast.success('Feedback deleted')
      navigate(routes.feedbacks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (
      confirm(
        'Are you sure you want to permanently delete feedback ' + id + '?'
      )
    ) {
      deleteFeedback({ variables: { id } })
    }
  }

  return (
    <>
      <div className="space-y-3">
        <div className="py-20 px-10">
          <div className="rw-segment">
            <header className="rw-segment-header" />
            <h2 className="rw-heading rw-heading-secondary">
              <div className="space-y-3">
                <div>
                  <ul className="divide-y divide-gray-200">
                    <li className="py-4">
                      <div className="flex space-x-3">
                        <div className="flex-1 space-y-1">
                          <h3 className="text-xl font-medium">
                            {' '}
                            <div className="py-5">
                              You are about to delete a feedback post created by
                              User: {feedback.userId}
                            </div>
                          </h3>
                          <div className="flex items-center justify-between">
                            <h3 className="text-xl font-medium">
                              {' '}
                              <div className="py-5">
                                The Feedback ID is: {feedback.id}
                              </div>
                            </h3>
                          </div>
                          <p className="text-xl text-gray-500">
                            <div className="py-5">
                              It was created on: {timeTag(feedback.createdAt)}
                            </div>
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </h2>

            <div className="text-xl">
              {' '}
              Click &#39;Delete&#39; to continue deleting post or &#39;Back&#39;
              to return to{' '}
              <Link
                className="hover:bg-indigo-700 rounded-md"
                to={routes.singleFeedback({ id: feedback.id })}
              >
                Post Details
              </Link>
            </div>
            <nav className="rw-button-group">
              <div className="pt-5">
                <div className="flex justify-end"></div>
                <button
                  type="button"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Link to={routes.singleFeedback({ id: feedback.id })}>
                    Back
                  </Link>
                </button>
                <button
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => onDeleteClick(feedback.id)}
                >
                  Delete
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
export const Loading = () => <div>Loading...</div>

export const Empty = () => (
  <div>Feedback not found .. Empty State in SingleFeedBackCell</div>
)

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)
export const Success = ({ feedback }) => {
  return <Feedback feedback={feedback} />
}
