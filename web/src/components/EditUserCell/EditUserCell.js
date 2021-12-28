import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import UserForm from '../UserForm/UserForm'

export const QUERY = gql`
  query EditUserById($id: String!) {
    user: user(id: $id) {
      id
      name
      email
      phone
      createdAt
    }
  }
`

const UPDATE_USER_MUTATION = gql`
  mutation UpdateUserMutation($id: String!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      name
      email
      phone
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ user }) => {
  const [updateUser, { loading, error }] = useMutation(UPDATE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User updated')
      navigate(routes.contacts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })
  const onSave = (input, id) => {
    updateUser({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <div className="px-2 py-2">
          <div className="text-center text-xl py-5 bg-grey-800 border ">
            Edit Feedback
          </div>
          <h3 className="text-xl leading-6 font-medium text-gray-900 py-3">
            User ID: {user.id}
          </h3>
        </div>
      </header>
      <div className="rw-segment-main">
        <UserForm user={user} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
