export const schema = gql`
  type User {
    id: String!
    email: String!
    phone: String
    name: String!
    contactTeamId: String
    imageUrl: String
  }
`
