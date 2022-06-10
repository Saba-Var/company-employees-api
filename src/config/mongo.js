import mongoose from 'mongoose'

const connect = async () => {
  try {
    const connectionURL = `mongodb+srv://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}@cluster0.m3pxc13.mongodb.net/${process.env.MONGO_DATABASE}`
    return mongoose.connect(connectionURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  } catch (e) {
    console.log(e)
  }
  return null
}

export default connect
