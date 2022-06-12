import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
import readline from 'readline'
import connectToMongo from '../config/mongo.js'
import User from '../models/User.js'

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const createUser = () => {
  dotenv.config()
  ;(async () => {
    let mongoose = null

    mongoose = await connectToMongo()

    const email = process.env.USER_EMAIL
    let password

    if (process.env.USER_PASSWORD && email) {
      await bcrypt
        .hash(process.env.USER_PASSWORD, 12)
        .then((hashedPassword) => {
          password = hashedPassword
        })
    }

    const validEmail = String(email).match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )

    if (validEmail) {
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
    } else console.log('Enter valid email')

    await mongoose.connection.close()
  })()
}

readLine.question(`email: `, (email) => {
  process.env.USER_EMAIL = email
  readLine.question(`password: `, (password) => {
    process.env.USER_PASSWORD = password
    readLine.close()
    createUser()
  })
})
