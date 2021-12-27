import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import CoreLayout from 'src/layouts/CoreLayout/CoreLayout'
const ContactsPage = () => {
  return (
    <>
      <CoreLayout>
        <MetaTags title="Contacts" description="Contacts page" />

        <h1>ContactsPage</h1>
        <p>
          Find me in <code>./web/src/pages/ContactsPage/ContactsPage.js</code>
        </p>
        <p>
          My default route is named <code>contacts</code>, link to me with `
          <Link to={routes.contacts()}>Contacts</Link>`
        </p>
      </CoreLayout>
    </>
  )
}

export default ContactsPage
