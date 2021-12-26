import { render } from '@redwoodjs/testing/web'

import SingleFeedbackPage from './SingleFeedbackPage'

describe('SingleFeedbackPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SingleFeedbackPage />)
    }).not.toThrow()
  })
})
