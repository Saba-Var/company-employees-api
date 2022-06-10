import mongoose from 'mongoose'
import Employee from '../models/Employee.js'
import Company from '../models/Company.js'

export const addEmployee = async (req, res) => {
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
      message: `User with this personal number(${personalNumber}) already exists`,
    })

  try {
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

      await newEmployee
        .save()
        .then(() => {
          console.log('Employee saved successfully')
          return res
            .status(201)
            .send({ message: 'Success! Employee saved successfully' })
        })
        .catch((err) => res.status(400).json({ message: err.message }))
    } else return res.status(404).json({ message: 'Company not found' })
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }

  return null
}
