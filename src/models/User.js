import mongoose from 'mongoose'
import userSchema from '../schemas/user.js'

const User = mongoose.model('user', userSchema)

export default User
