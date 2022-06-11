import { validationResult } from 'express-validator'

const validateRequestSchema = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(401).json({ errors: errors.array() })
  }
  return next()
}
export default validateRequestSchema
