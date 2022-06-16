import mongoose from 'mongoose'

const connect = async () => {
  try {
    const connectionURL = `${process.env.MONGO_PROTOCOL}://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}${process.env.MONGO_CLUSTER}/${process.env.MONGO_DATABASE}`

    return mongoose.connect(connectionURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  } catch (e) {
    throw new Error(e.message)
  }
}

export default connect
