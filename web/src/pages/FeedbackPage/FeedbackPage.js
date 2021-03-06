import CoreLayout from 'src/layouts/CoreLayout'
import { withPage } from 'src/components/WithPageHoc'
import { Link, routes } from '@redwoodjs/router'
import ContainerLayout from 'src/layouts/ContainerLayout/ContainerLayout'

export const QUERY = gql`
  query FeedbackListQuery {
    feedbacks {
      id
      text
      createdAt
      userId
      createdBy {
        name
      }
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
const FeedbackItem = ({ fb }) => {
  console.log(fb)
  return (
    <>
      <ul className="">
        <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="text-gray-900 text-sm font-medium truncate">
                  FeedbackID: {fb.id}
                </h3>
                <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  User: {fb?.createdBy?.name}
                </span>
              </div>
              <div className="py-1">
                <div className="py-1"> {fb.text}</div>
              </div>
              <p className="mt-1 text-gray-500 text-sm truncate">
                <div className="">Create At: {timeTag(fb.createdAt)}</div>
              </p>
            </div>

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
                  to={routes.singleFeedback({ id: fb.id })}
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-green-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="ml-3">View Details</span>
                </Link>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <Link
                  to={routes.editFeedback({ id: fb.id })}
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-green-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                  <span className="ml-3">Quick Edit</span>
                </Link>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="py-2"></div>
    </>
  )
}

export const Layout = ({ children }) => {
  return <CoreLayout title={'Incoming feedback'}>{children}</CoreLayout>
}

export const Empty = () => {
  const headerBtns = (
    <>
      <div className="px-10 py-10">
        <span className="rounded-md shadow-sm order-0 sm:order-1 sm:ml-3">
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-blue-800 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple focus:border-purple-700 active:bg-indigo-700">
            <Link to={routes.newFeedback()}>Add insight</Link>
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

const Success = ({ feedbacks }) => {
  const headerBtns = (
    <>
      <span className="rounded-md shadow-sm order-0 sm:order-1 sm:ml-3">
        <button className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-green-800 border border-transparent rounded-md hover:bg-green-700 focus:outline-none focus:shadow-outline-purple focus:border-purple-700 active:bg-indigo-700">
          <Link to={routes.newFeedback()}>Add insight</Link>
        </button>
      </span>
    </>
  )
  return (
    <ContainerLayout maxWidth="max-w-full" headerBtns={headerBtns}>
      <div className="text-center text-xl py-5 bg-grey-800 border ">
        User Feedback
      </div>

      <div className="py-2"></div>
      <div className="grid">
        <div className="divide-y">
          {feedbacks?.map((fb) => (
            <FeedbackItem key={fb.id} fb={fb} />
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
        <button className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-blue-800 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple focus:border-purple-700 active:bg-indigo-700">
          <Link to={routes.newFeedback()}>Add insight</Link>
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
