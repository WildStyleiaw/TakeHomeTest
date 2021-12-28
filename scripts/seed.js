import { db } from 'api/src/lib/db'

const CLOUDOPS_DATA = {
  insights: [
    {
      insightText:
        'It would be very useful to have slack notifications when new data is added.',
    },
    {
      insightText:
        'It is a hassle to switch between so many platforms, can you add a chrome extension?',
    },
    {
      insightText:
        'Please add a page to check our previous orders so it is easier to reorder!',
    },
    {
      insightText:
        'The website can be hard to navigate, it would be easier if there was a product category menu at the top of the pages.',
    },
  ],
}

const USER_DATA = {
  data: [
    {
      name: 'Sammy Sandwitch',
      email: 'RyeTillIDie@uv.com',
      phone: '1-511-958-3129',
      createdAt: new Date(),
    },
    {
      name: 'Bob Burgers',
      email: 'AchinforBacon@uv.com',
      phone: '1-123-123-1523',
      createdAt: new Date(),
    },
    {
      name: 'Larry Lasagne',
      email: 'lasagne@uv.com',
      phone: '9-454-536-2343',
      createdAt: new Date(),
    },
    {
      name: 'Paul Poultry',
      email: 'chickenlicken@uv.com',
      phone: '6-123-215-1254',
      createdAt: new Date(),
    },
  ],
}
export default async () => {
  let users

  try {
    await db.user.deleteMany({})

    users = await USER_DATA.data.map(async (user) => {
      await db.user.create({
        data: {
          name: user.name,
          email: user.email,
          phone: user.phone,
          createdAt: new Date(),
        },
      })
    })
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
  try {
    await db.feedback.deleteMany({})
    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    console.log(users)
    Promise.all(
      //
      // Change to match your data model and seeding needs
      //
      CLOUDOPS_DATA.insights.map(async (insight, index) => {
        await db.feedback.create({
          data: {
            text: insight.insightText,
            userId: users[index].id,
          },
        })
      })
    )
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
