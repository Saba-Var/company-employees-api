import mongoose from 'mongoose'
import companySchema from '../schemas/company.js'

const Company = mongoose.model('Company', companySchema)

export default Company
