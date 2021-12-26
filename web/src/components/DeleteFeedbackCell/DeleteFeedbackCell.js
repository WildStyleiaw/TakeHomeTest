export const QUERY = gql`
  query FindDeleteFeedbackQuery($id: Int!) {
    deleteFeedback: deleteFeedback(id: $id) {
      id
    }
  }
`
const onDeleteClick = (id) => {
  if (confirm('Are you sure you want to delete feedback ' + id + '?')) {
    deleteFeedback({ variables: { id } })
  }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ deleteFeedback }) => {
  return <div>{JSON.stringify(deleteFeedback)}</div>
}
