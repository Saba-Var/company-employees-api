import mongoose from 'mongoose'

const { Schema } = mongoose

const companySchema = new Schema({
  name: {
    type: String,
    required: 'Company name is required',
    trim: true,
    unique: true,
  },

  website: {
    type: String,
    trim: true,
    required: 'Web-Site address is required',
  },

  logoUrl: {
    type: String,
    trim: true,
    required: 'Company logo url is required',
  },

  establishmentDate: {
    type: Date,
    trim: true,
    required: 'Company establishment date is required',
  },
})

export default companySchema
