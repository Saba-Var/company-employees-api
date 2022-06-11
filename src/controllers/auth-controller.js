import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import User from '../models/User.js'

export const authentication = async (req, res) => {
  try {
    const { email, password } = req.body
    const currentUser = await User.findOne({ email })
    if (!currentUser) return res.status(404).json({ message: 'User not exist' })
    bcrypt.compare(password, currentUser.password).then((isMatch) => {
      if (isMatch) {
        const accessToken = jwt.sign(
          { email, password },
          process.env.ACCESS_TOKEN_SECRET
        )
        return res.status(201).json({ token: accessToken })
      }
      return res.status(404).json({ message: 'Password did not match' })
    })
  } catch (error) {
    return res.status(404).json(error.message)
  }
  return null
}
