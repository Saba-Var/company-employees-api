import mongoose from 'mongoose'
import employeeSchema from '../schemas/employee.js'

const Employee = mongoose.model('Employee', employeeSchema)

export default Employee
