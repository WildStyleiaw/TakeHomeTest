import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import CoreLayout from 'src/layouts/CoreLayout/CoreLayout'
const SingleFeedbackPage = () => {
  return (
    <>
      <CoreLayout>
        <MetaTags title="SingleFeedback" description="SingleFeedback page" />

        <h1>SingleFeedbackPage</h1>
        <p>
          Find me in{' '}
          <code>./web/src/pages/SingleFeedbackPage/SingleFeedbackPage.js</code>
        </p>
        <p>
          My default route is named <code>singleFeedback</code>, link to me with
          `<Link to={routes.singleFeedback()}>SingleFeedback</Link>`
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-purple-600 border border-transparent rounded-md hover:bg-purple-500 focus:outline-none focus:shadow-outline-purple focus:border-purple-700 active:bg-indigo-700">
            <Link to={routes.editFeedback()}>Edit</Link>
          </button>
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-purple-600 border border-transparent rounded-md hover:bg-purple-500 focus:outline-none focus:shadow-outline-purple focus:border-purple-700 active:bg-indigo-700">
            <Link to={routes.deleteFeedback()}>Delete</Link>
          </button>
        </p>
      </CoreLayout>
    </>
  )
}

export default SingleFeedbackPage
