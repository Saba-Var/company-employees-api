import mongoose from 'mongoose'
import isEmail from 'validator/lib/isEmail.js'

const { Schema } = mongoose

const userSchema = new Schema({
  email: {
    type: String,
    required: 'Email address is required',
    trim: true,
    lowercase: true,
    unique: true,
    validate: [isEmail, 'invalid email'],
  },

  password: {
    type: String,
    required: 'Password is required',
  },
})

const User = mongoose.model('user', userSchema)

export default User
