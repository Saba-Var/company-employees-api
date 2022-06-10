import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
import connectToMongo from '../config/mongo.js'
import User from '../models/User.js'

dotenv.config()
;(async () => {
  let mongoose = null

  mongoose = await connectToMongo()

  process.env.USER_PASSWORD = 'saba'
  process.env.USER_EMAIL = 'saba@gmail.com'

  const email = process.env.USER_EMAIL
  let password

  if (process.env.USER_PASSWORD && email) {
    await bcrypt.hash(process.env.USER_PASSWORD, 12).then((hashedPassword) => {
      password = hashedPassword
    })
  }

  const newUser = await new User({
    email,
    password,
  })

  await newUser
    .save()
    .then(() => {
      console.log('user created successfully')
    })
    .catch((err) => console.error(err.message))
  await mongoose.connection.close()
})()
