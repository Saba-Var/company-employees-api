import jwt from 'jsonwebtoken'

const authMiddleware = async (req, res, next) => {
  try {
    const { authorization } = req.headers
    if (!authorization)
      return res.status(401).json({
        message: 'missing authorization header',
      })
    const token = authorization.trim().split(' ')[1]
    const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    if (verified) return next()
    return res.status(400).json({ message: 'User is not authorized' })
  } catch (error) {
    console.log(error)
    return res.status(403).json({ message: 'Token is not valid' })
  }
}

export default authMiddleware
