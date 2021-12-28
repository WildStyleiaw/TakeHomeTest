import CoreLayout from 'src/layouts/CoreLayout'
import { withPage } from 'src/components/WithPageHoc'
import { Link, routes } from '@redwoodjs/router'
import ContainerLayout from 'src/layouts/ContainerLayout/ContainerLayout'

export const QUERY = gql`
  query UserListQuery {
    userList {
      id
      email
      name
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

const UserItem = ({ user }) => {
  return (
    <ul className="">
      <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
        <div className="w-full flex items-center justify-between p-6 space-x-6">
          <div className="flex-1 truncate">
            <div className="flex items-center space-x-3">
              <h3 className="text-gray-900 text-sm font-medium truncate">
                <div className="">User: {user.name}</div>
              </h3>
              <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                UserID: {user.id}
              </span>
            </div>
            <div className="py-2">
              <div className="py-1"> Active Feedback Items: {user.email}</div>
            </div>
            <p className="mt-1 text-gray-500 text-sm truncate">
              <div className="">Joined on: {user.createdAt}</div>
            </p>
          </div>
          <button
            type="button"
            className="text-sm font-medium text-gray-600 hover:text-green-500"
          >
            {' '}
            <Link to={routes.singleUser({ id: user.id })}>User Details</Link>
          </button>

          <img
            className="h-9 w-9 rounded-full pr-1000"
            src="https://d33wubrfki0l68.cloudfront.net/492ed629970792d32ac857da0166a7d2308bad99/428b6/images/diecut.svg"
            alt="Redwood Logo"
          />
        </div>
        <div>
          <div className="-mt-px flex divide-x divide-gray-200">
            <div className="w-0 flex-1 flex">
              <Link
                to={routes.contacts()}
                className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-green-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="ml-3">Email</span>
              </Link>
            </div>
            <div className="-ml-px w-0 flex-1 flex">
              <Link
                to={routes.contacts()}
                className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-green-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="ml-3">Call</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="py-2"></div>
      </li>
    </ul>
  )
}

export const Layout = ({ children }) => {
  return <CoreLayout title={'Incoming users'}>{children}</CoreLayout>
}

export const Empty = () => {
  const headerBtns = (
    <>
      <div className="px-10 py-10">
        <span className="rounded-md shadow-sm order-0 sm:order-1 sm:ml-3">
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-green-800 border border-transparent rounded-md hover:bg-green-700 focus:outline-none focus:shadow-outline-purple focus:border-purple-700 active:bg-indigo-700">
            <Link to={routes.newUser()}>Add User</Link>
          </button>
        </span>
      </div>
    </>
  )
  return (
    <ContainerLayout headerBtns={headerBtns}>
      <div className="grid">
        <div className="divide-y">
          <p className="px-6 py-3 leading-5 text-gray-500 whitespace-nowrap">
            No insights added yet
          </p>
        </div>
      </div>
    </ContainerLayout>
  )
}

export const Failure = ({ error }) => <div>Error: {error.message}</div>

const Success = ({ userList }) => {
  const headerBtns = (
    <>
      <span className="rounded-md shadow-sm order-0 sm:order-1 sm:ml-3">
        <button className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-green-800 border border-transparent rounded-md hover:bg-green-700 focus:outline-none focus:shadow-outline-purple focus:border-purple-700 active:bg-indigo-700">
          <Link to={routes.newUser()}>Add User</Link>
        </button>
      </span>
    </>
  )
  return (
    <ContainerLayout maxWidth="max-w-full" headerBtns={headerBtns}>
      <div className="text-center text-xl py-5 bg-grey-800 border ">
        Contacts
      </div>
      <div className="grid">
        <div className="divide-y">
          {userList?.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </div>
    </ContainerLayout>
  )
}

export const Loading = () => {
  const headerBtns = (
    <>
      <span className="rounded-md shadow-sm order-0 sm:order-1 sm:ml-3">
        <button className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md hover:bg-green-700 focus:outline-none focus:shadow-outline-purple focus:border-purple-700 active:bg-indigo-700">
          <Link to={''}>Add User</Link>
        </button>
      </span>
    </>
  )
  return (
    <ContainerLayout maxWidth="max-w-full" headerBtns={headerBtns}>
      <div className="grid">
        <div className="divide-y">
          <table className="min-w-full">
            <tbody className="px-6 py-3 bg-white divide-y divide-gray-100">
              <td className="hidden px-6 py-3 leading-5 text-gray-500 md:table-cell">
                <div className="flex space-x-4 animate-pulse">
                  <div className="flex-1 py-1 space-y-4">
                    <div className="w-full h-4 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </td>
              <td className="hidden px-6 py-3 leading-5 text-gray-500 md:table-cell">
                <div className="flex space-x-4 animate-pulse">
                  <div className="flex-1 py-1 space-y-4">
                    <div className="w-full h-4 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </td>
              <td className="hidden px-6 py-3 leading-5 text-gray-500 md:table-cell">
                <div className="flex space-x-4 animate-pulse">
                  <div className="flex-1 py-1 space-y-4">
                    <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </td>
              <td className="hidden px-6 py-3 leading-5 text-gray-500 md:table-cell">
                <div className="flex space-x-4 animate-pulse">
                  <div className="flex-1 py-1 space-y-4">
                    <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </td>
              <td className="hidden px-6 py-3 leading-5 text-gray-500 md:table-cell">
                <div className="flex space-x-4 animate-pulse">
                  <div className="flex-1 py-1 space-y-4">
                    <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </td>
              <td className="hidden px-6 py-3 leading-5 text-gray-500 md:table-cell">
                <div className="flex space-x-4 animate-pulse">
                  <div className="flex-1 py-1 space-y-4">
                    <div className="w-2/3 h-4 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </td>
            </tbody>
          </table>
        </div>
      </div>
    </ContainerLayout>
  )
}

export default withPage({
  QUERY,
  Success,
  Failure,
  Loading,
  Empty,
  Layout,
})
