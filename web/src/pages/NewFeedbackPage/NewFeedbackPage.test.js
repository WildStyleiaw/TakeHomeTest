import { render } from '@redwoodjs/testing/web'

import NewFeedbackPage from './NewFeedbackPage'

describe('NewFeedbackPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewFeedbackPage />)
    }).not.toThrow()
  })
})
