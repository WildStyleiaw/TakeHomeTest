import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import CoreLayout from 'src/layouts/CoreLayout/CoreLayout'
const EditFeedbackPage = () => {
  return (
    <>
      <CoreLayout>
        <MetaTags title="EditFeedback" description="EditFeedback page" />

        <h1>EditFeedbackPage</h1>
        <p>
          Find me in{' '}
          <code>./web/src/pages/EditFeedbackPage/EditFeedbackPage.js</code>
        </p>
        <p>
          My default route is named <code>editFeedback</code>, link to me with `
          <Link to={routes.editFeedback()}>EditFeedback</Link>`
        </p>
      </CoreLayout>
    </>
  )
}

export default EditFeedbackPage
