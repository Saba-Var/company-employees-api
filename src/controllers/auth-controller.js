import { validationResult } from 'express-validator'
import jwt from 'jsonwebtoken'

export const authentication = (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(401).json({ errors: errors.array() })

  const { email, password } = req.body
  const user = { email, password }
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)

  res.json({ token: accessToken })
  return null
}
