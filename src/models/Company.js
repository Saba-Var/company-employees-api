import mongoose from 'mongoose'
import companySchema from '../schemas/company.js'

const Company = mongoose.model('company', companySchema)

export default Company
