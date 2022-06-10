import jwt from 'jsonwebtoken'

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(403).json({
      message: 'missing authorization header',
    })
  }

  const token = authorization.trim().split(' ')[1]
  const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

  if (verified) {
    return next()
  }

  return res.status(403).json({ message: 'Token is not valid' })
}

export default authMiddleware
