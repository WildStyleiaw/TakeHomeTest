import { db } from 'src/lib/db'

export const feedbacks = () => {
  return db.feedback.findMany()
}

export const feedback = ({ id }) => {
  return db.feedback.findUnique({
    where: { id },
  })
}

export const createFeedback = ({ input }) => {
  return db.feedback.create({
    data: {
      text: input.text,
      userId: input.id,
    },
  })
}

export const updateFeedback = ({ id, input }) => {
  return db.feedback.update({
    data: input,
    where: { id },
  })
}

export const deleteFeedback = ({ id }) => {
  return db.feedback.delete({
    where: { id },
  })
}
export const userList = () => {
  console.log('fired!')
  return db.user.findMany()
}
export const userFeedbackCount = ({ id }) => {
  db.user.feedback.count({
    where: { id },
  })
}
