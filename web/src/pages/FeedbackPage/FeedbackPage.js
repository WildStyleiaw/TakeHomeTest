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
  return (
    <div className="space-y-3">
      <div>
        <ul className="divide-y divide-gray-200">
          <li className="py-4">
            <div className="flex space-x-3">
              <div className="px-1 py-1">
                <img
                  className="h-9 w-9 rounded-full"
                  src="https://d33wubrfki0l68.cloudfront.net/492ed629970792d32ac857da0166a7d2308bad99/428b6/images/diecut.svg"
                  alt="Redwood Logo"
                />
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="text-sm font-medium">
                  {' '}
                  <div className="">User: {fb.userId}</div>
                </h3>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">
                    {' '}
                    <div className="">ID: {fb.id}</div>
                  </h3>
                </div>
                <p className="text-sm text-gray-500">
                  <div className="">Create At: {timeTag(fb.createdAt)}</div>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="px-3 py-1">
        <div className=""> {fb.text}</div>
      </div>
      <div className="px-3 py-3">
        <button className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline-purple focus:border-purple-700 active:bg-indigo-700">
          <Link to={routes.singleFeedback({ id: fb.id })}>View Details</Link>
        </button>
      </div>
    </div>
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
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline-purple focus:border-purple-700 active:bg-indigo-700">
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
        <button className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline-purple focus:border-purple-700 active:bg-indigo-700">
          <Link to={routes.newFeedback()}>Add insight</Link>
        </button>
      </span>
    </>
  )
  return (
    <ContainerLayout maxWidth="max-w-full" headerBtns={headerBtns}>
      <div className="grid">
        <div className="divide-y">
          {feedbacks.map((fb) => (
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
        <button className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline-purple focus:border-purple-700 active:bg-indigo-700">
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
