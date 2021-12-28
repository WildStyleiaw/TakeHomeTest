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
    email: String
    name: String
  }
  type Query {
    feedbacks: [Feedback!]! @requireAuth
    feedback(id: String!): Feedback @requireAuth
    userList: [User!]! @requireAuth
  }

  input CreateFeedbackInput {
    text: String!
  }

  input UpdateFeedbackInput {
    text: String
  }

  type Mutation {
    createFeedback(input: CreateFeedbackInput!): Feedback! @requireAuth
    updateFeedback(id: String!, input: UpdateFeedbackInput!): Feedback!
      @requireAuth
    deleteFeedback(id: String!): Feedback! @requireAuth
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
