import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import CoreLayout from 'src/layouts/CoreLayout/CoreLayout'
const NewFeedbackPage = () => {
  return (
    <>
      <CoreLayout>
        <MetaTags title="NewFeedback" description="NewFeedback page" />

        <h1>NewFeedbackPage</h1>
        <p>
          Find me in{' '}
          <code>./web/src/pages/NewFeedbackPage/NewFeedbackPage.js</code>
        </p>
        <p>
          My default route is named <code>newFeedback</code>, link to me with `
          <Link to={routes.newFeedback()}>NewFeedback</Link>`
        </p>
      </CoreLayout>
    </>
  )
}

export default NewFeedbackPage
