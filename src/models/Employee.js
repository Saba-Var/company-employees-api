import mongoose from 'mongoose'
import employeeSchema from '../schemas/employee.js'

const Employee = mongoose.model('employee', employeeSchema)

export default Employee
