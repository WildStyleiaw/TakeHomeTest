// To access your database
// Append api/* to import from api and web/* to import from web
import { db } from 'api/src/lib/db'

export default async ({ args }) => {
  // Your script here...
  console.log(':: Executing script with args ::')
  console.log(args)
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

  try {
    await db.feedback.deleteMany({})
    await db.user.deleteMany({})
    return await USER_DATA.data.map(async (user) => {
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
}
