import { Link, routes } from '@redwoodjs/router'

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

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const User = ({ user }) => {
  return (
    <>
      <div className="space-y-3">
        <div className="text-center text-xl py-5 bg-grey-800 border ">
          User Details
        </div>
        <div className="py-5 px-5">
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
                            <div className="">Name: {user.name}</div>
                          </h3>

                          <div className="flex items-center justify-between">
                            <h3 className="text-xl font-medium">
                              {' '}
                              <div className="">ID: {user.id}</div>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </h2>

            <div className="text-xl"> Email: {user.email}</div>
            <div className="text-xl"> Phone: {user.phone}</div>

            <p className="text-xl py-5 text-gray-500">
              <div className="">Joined on: {timeTag(user.createdAt)}</div>
            </p>
            <nav className="rw-button-group">
              <div className="pt-5">
                <div className="flex justify-end"></div>
                <button
                  type="button"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Link to={routes.contacts()}>Back</Link>
                </button>
                <button
                  type="button"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Link to={routes.editUser({ id: user.id })}>Edit</Link>
                </button>
                <button className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <Link to={routes.deleteUser({ id: user.id })}>Delete</Link>
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

export const Empty = () => <div>User not found ... </div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)
export const Success = ({ user }) => {
  return <User user={user} />
}
