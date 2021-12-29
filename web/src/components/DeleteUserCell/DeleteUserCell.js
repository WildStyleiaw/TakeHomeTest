import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

export const QUERY = gql`
  query FindUserById($id: String!) {
    user: user(id: $id) {
      id
      name
      email
      phone
      createdAt
    }
  }
`
const DELETE_USER_MUTATION = gql`
  mutation DeleteUserMutation($id: String!) {
    deleteUser(id: $id) {
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

const User = ({ user }) => {
  const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User deleted')
      navigate(routes.contacts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (
      confirm(
        'Are you sure you want to permanently delete user id: ' + id + '?',
        'This will also delete all related feedback items?'
      )
    ) {
      deleteUser({ variables: { id } })
    }
  }

  return (
    <>
      <div className="space-y-3">
        <div className="text-center text-xl py-5 bg-grey-800 border ">
          Delete User
        </div>
        <div className="py-1 px-1">
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
                              You are about to delete a User:
                            </div>
                          </h3>
                          <div className="flex items-center justify-between">
                            <h3 className="text-xl font-medium">
                              {' '}
                              <div className="py-5">User ID is: {user.id}</div>
                            </h3>
                          </div>
                          <div className="py-5">Name: {user.name}</div>
                          <div className="py-5">Email: {user.email}</div>
                          <div className="py-5">Phone: {user.phone}</div>

                          <p className="text-xl text-gray-500">
                            <div className="py-5">
                              User was created on: {timeTag(user.createdAt)}
                            </div>
                          </p>
                          <h3 className="text-xl font-medium">
                            {' '}
                            <div className="py-5">
                              **Please note that deleting a user will delete all
                              associated Feedback Items**
                            </div>
                          </h3>
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
                to={routes.singleFeedback({ id: user.id })}
              >
                Post Details
              </Link>
            </div>
            <nav className="rw-button-group">
              <div className="pt-5">
                <div className="flex justify-end"></div>
                <button
                  type="button"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Link to={routes.singleUser({ id: user.id })}>Back</Link>
                </button>
                <button
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => onDeleteClick(user.id)}
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

export const Empty = () => <div>User not found .. </div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)
export const Success = ({ user }) => {
  return <User user={user} />
}
