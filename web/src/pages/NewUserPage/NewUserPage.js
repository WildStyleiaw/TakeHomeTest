import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import UserForm from 'src/components/UserForm'
import CoreLayout from 'src/layouts/CoreLayout/CoreLayout'

const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      id
    }
  }
`

const NewUser = () => {
  const [createUser, { loading, error }] = useMutation(CREATE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User created')
      navigate(routes.contacts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createUser({ variables: { input } })
  }

  return (
    <CoreLayout>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h3 className="text-xl leading-6 font-medium text-gray-900">
            New User
          </h3>
        </header>
        <div className="rw-segment-main">
          <UserForm onSave={onSave} loading={loading} error={error} />
        </div>
      </div>
    </CoreLayout>
  )
}

export default NewUser
