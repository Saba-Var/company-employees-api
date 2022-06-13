import mongoose from 'mongoose'

const { Schema } = mongoose

const employeeSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },

  lastName: {
    type: String,
    trim: true,
    required: true,
  },

  startedAt: {
    type: Date,
    trim: true,
    required: true,
  },

  birthDate: {
    type: Date,
    trim: true,
    required: true,
  },

  personalNumber: {
    type: String,
    trim: true,
    required: true,
  },

  position: {
    type: String,
    trim: true,
    required: true,
  },

  worksInCompany: {
    type: Schema.Types.ObjectId,
    ref: 'company',
    required: true,
  },
})

const Employee = mongoose.model('employee', employeeSchema)

export default Employee
