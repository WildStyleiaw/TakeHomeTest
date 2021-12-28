import { render } from '@redwoodjs/testing/web'

import SingleUserPage from './SingleUserPage'

describe('SingleUserPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SingleUserPage />)
    }).not.toThrow()
  })
})
