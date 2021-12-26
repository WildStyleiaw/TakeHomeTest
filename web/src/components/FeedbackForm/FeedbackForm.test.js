import { render } from '@redwoodjs/testing/web'

import FeedbackForm from './FeedbackForm'

describe('FeedbackForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FeedbackForm />)
    }).not.toThrow()
  })
})
