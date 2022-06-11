import mongoose from 'mongoose'
import Employee from '../models/Employee.js'
import Company from '../models/Company.js'

export const addEmployee = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      startedAt,
      birthDate,
      personalNumber,
      position,
      id,
    } = req.body
    const notUnique = await Employee.findOne({ personalNumber })
    if (notUnique)
      return res.status(400).json({
        message: `Employee with this personal number(${personalNumber}) already exists`,
      })
    const companyId = mongoose.Types.ObjectId(id)
    const company = await Company.findById(companyId)
    if (company) {
      const newEmployee = await new Employee({
        firstName,
        lastName,
        startedAt,
        birthDate,
        personalNumber,
        position,
        companyId,
      })
      await newEmployee.save().then(async (employee) => {
        await Company.findByIdAndUpdate(companyId, {
          $push: {
            employees: {
              _id: mongoose.Types.ObjectId(employee._id),
            },
          },
        })
        res
          .status(201)
          .send({ message: 'Success! Employee saved successfully' })
      })
    } else
      return res
        .status(404)
        .json({ message: `Company with this id (${id}) not found` })
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }

  return null
}
