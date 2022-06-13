import mongoose from 'mongoose'

const { Schema } = mongoose

const employeeSchema = new Schema({
  firstName: {
    type: String,
  },

  lastName: {
    type: String,
  },

  startedAt: {
    type: Date,
  },

  birthDate: {
    type: Date,
  },

  personalNumber: {
    type: String,
  },

  position: {
    type: String,
  },

  companyId: {
    type: Schema.Types.ObjectId,
    ref: 'company',
    required: true,
  },

  company: {
    type: Object,
    required: true,
  },
})

const Employee = mongoose.model('employee', employeeSchema)

export default Employee
