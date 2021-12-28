import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query FindFeedbackById($id: String!) {
    feedback: feedback(id: $id) {
      id
      text
      createdAt
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
                        <img
                          className="h-12 w-12 rounded-full"
                          src="https://d33wubrfki0l68.cloudfront.net/492ed629970792d32ac857da0166a7d2308bad99/428b6/images/diecut.svg"
                          alt="Redwood Logo"
                        />
                        <div className="flex-1 space-y-1">
                          <h3 className="text-xl font-medium">
                            {' '}
                            <div className="">User: {feedback.userId}</div>
                          </h3>
                          <div className="flex items-center justify-between">
                            <h3 className="text-xl font-medium">
                              {' '}
                              <div className="">ID: {feedback.id}</div>
                            </h3>
                          </div>
                          <p className="text-xl text-gray-500">
                            <div className="">
                              Created At: {timeTag(feedback.createdAt)}
                            </div>
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </h2>

            <div className="text-xl"> {feedback.text}</div>
            <nav className="rw-button-group">
              <div className="pt-5">
                <div className="flex justify-end"></div>
                <button
                  type="button"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Link to={routes.feedback()}>Back</Link>
                </button>
                <button
                  type="button"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Link to={routes.editFeedback({ id: feedback.id })}>
                    Edit
                  </Link>
                </button>
                <button className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <Link to={routes.deleteFeedback({ id: feedback.id })}>
                    Delete
                  </Link>
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
