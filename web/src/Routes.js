/* eslint-disable no-undef */
import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/contacts/{id}/delete" page={DeleteUserPage} name="deleteUser" />
      <Route path="/contacts/{id}/edit" page={EditUserPage} name="editUser" />
      <Route path="/contacts/new" page={NewUserPage} name="newUser" />
      <Route path="/contacts/{id}" page={SingleUserPage} name="singleUser" />
      <Route path="/feedback/new" page={NewFeedbackPage} name="newFeedback" />
      <Route path="/contacts" page={ContactsPage} name="contacts" />
      <Route path="/feedback/{id}" page={SingleFeedbackPage} name="singleFeedback" />
      <Route path="/feedback/{id}/delete" page={DeleteFeedbackPage} name="deleteFeedback" />
      <Route path="/feedback/{id}/edit" page={EditFeedbackPage} name="editFeedback" />

      <Route path="/dashboard" page={HomePage} name="dashboard" />
      <Route path="/" page={HomePage} name="dashboard" />
      <Route path="/feedback" page={FeedbackPage} name="feedback" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
