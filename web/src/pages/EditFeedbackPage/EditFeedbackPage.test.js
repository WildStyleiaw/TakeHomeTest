import { render } from '@redwoodjs/testing/web'

import EditFeedbackPage from './EditFeedbackPage'

describe('EditFeedbackPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditFeedbackPage />)
    }).not.toThrow()
  })
})
