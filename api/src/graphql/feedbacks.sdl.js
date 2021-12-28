export const schema = gql`
  type Feedback {
    id: String!
    text: String!
    createdAt: DateTime!
    type: FeedbackType!
    teamId: String
    originalUrl: String
    sourceType: InsightSource
    metadata: JSON
    submitter: User
    contact: User
  }

  type User {
    id: String!
    name: String
    email: String
    phone: String
    createdAt: DateTime!
  }
  type Query {
    feedbacks: [Feedback!]! @requireAuth
    feedback(id: String!): Feedback @requireAuth
    userList: [User!]! @requireAuth
    user(id: String!): User @requireAuth
  }

  input CreateFeedbackInput {
    text: String!
  }
  input UpdateFeedbackInput {
    text: String
  }

  input CreateUserInput {
    text: String!
  }
  input UpdateUserInput {
    name: String
    email: String
    phone: String
  }

  type Mutation {
    createFeedback(input: CreateFeedbackInput!): Feedback! @requireAuth
    updateFeedback(id: String!, input: UpdateFeedbackInput!): Feedback!
      @requireAuth
    deleteFeedback(id: String!): Feedback! @requireAuth

    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }

  enum FeedbackType {
    IDEA
    ISSUE
    OTHER
  }

  enum InsightSource {
    SLACK
    CHROME
    API
    PORTAL
    ADMIN
    INTERCOM
  }
`
