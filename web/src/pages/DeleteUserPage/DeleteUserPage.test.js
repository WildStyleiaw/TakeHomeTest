import { render } from '@redwoodjs/testing/web'

import DeleteUserPage from './DeleteUserPage'

describe('DeleteUserPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DeleteUserPage />)
    }).not.toThrow()
  })
})
