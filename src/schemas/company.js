import mongoose from 'mongoose'

const { Schema } = mongoose

const companySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  website: {
    type: String,
    trim: true,
    required: true,
  },

  logoUrl: {
    type: String,
    trim: true,
    required: true,
  },

  establishmentDate: {
    type: Date,
    trim: true,
    required: true,
  },

  employees: [{ type: Schema.Types.ObjectId, ref: 'employee' }],
})

export default companySchema
