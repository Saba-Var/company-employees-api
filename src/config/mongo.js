import mongoose from 'mongoose'

const connect = async () => {
  try {
    let connectionURL

    if (process.env.MONGO_HOST === 'localhost')
      connectionURL = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`
    else
      connectionURL = `mongodb+srv://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}@cluster0.m3pxc13.mongodb.net/${process.env.MONGO_DATABASE}`

    return mongoose.connect(connectionURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  } catch (e) {
    throw new Error(e.message)
  }
}

export default connect
