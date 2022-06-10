import mongoose from 'mongoose'

const { Schema } = mongoose

const employeeSchema = new Schema({
  firstName: {
    type: String,
    required: 'First Name is required',
    trim: true,
  },

  lastName: {
    type: String,
    trim: true,
    required: 'Last Name is required',
  },

  startedAt: {
    type: Date,
    trim: true,
    required: 'This field is required',
  },

  birthDate: {
    type: Date,
    trim: true,
    required: 'Birth Date is required',
  },

  personalNumber: {
    type: String,
    trim: true,
    required: 'Personal Number is required',
  },

  position: {
    type: String,
    trim: true,
    required: 'Position is required',
  },

  companyId: {
    type: Schema.Types.ObjectId,
    ref: 'company',
    required: 'Company id is required',
  },
})

export default employeeSchema
