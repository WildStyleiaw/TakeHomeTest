import { db } from 'src/lib/db'

export const feedbacks = () => {
  return db.feedback.findMany({
    include: { createdBy: true },
  })
}

export const feedback = ({ id }) => {
  return db.feedback.findUnique({
    where: { id },
  })
}

export const createFeedback = ({ input }) => {
  return db.feedback.createMany({
    data: {
      text: input.text,
      userId: input.id,
    },
  })
}

export const updateFeedback = ({ id, input }) => {
  return db.feedback.update({
    where: { id },
    data: input,
  })
}

export const deleteFeedback = ({ id }) => {
  return db.feedback.delete({
    where: { id },
  })
}
export const userList = () => {
  return db.user.findMany({ include: { insights: true } })
}
export const user = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const createUser = ({ input }) => {
  return db.user.create({
    data: {
      text: input.text,
      userId: input.id,
    },
  })
}

export const updateUser = ({ id, input }) => {
  return db.user.update({
    where: { id },
    data: input,
  })
}

export const deleteUser = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}
