import { render } from '@redwoodjs/testing/web'

import DeleteFeedbackPage from './DeleteFeedbackPage'

describe('DeleteFeedbackPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DeleteFeedbackPage />)
    }).not.toThrow()
  })
})
