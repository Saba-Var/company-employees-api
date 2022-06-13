import mongoose from 'mongoose'
import Employee from '../models/Employee.js'
import Company from '../models/Company.js'

export const addEmployee = async (req, res) => {
  try {
    const {
      personalNumber,
      birthDate,
      firstName,
      startedAt,
      lastName,
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
      })
      return res
        .status(201)
        .send({ message: 'Success! Employee saved successfully' })
    }
    return res
      .status(404)
      .json({ message: `Company with this id (${id}) not found` })
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find()
      .select('-__v')
      .populate('companyId', 'name')

    if (employees.length === 0)
      return res.status(404).json({ message: 'Employee list is empty' })
    return res.status(200).json(employees)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const oneEmployee = async (req, res) => {
  try {
    const { id } = req.body
    const currentEmployee = await Employee.findById(id)
    if (!currentEmployee)
      return res.status(404).json({ message: 'Employee not found' })
    return res.status(200).json(currentEmployee)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const deleteEmployee = async (req, res) => {
  try {
    const id = { _id: mongoose.Types.ObjectId(req.body.id) }
    const employee = await Employee.findOne(id)
    if (!employee)
      return res.status(404).json({ message: 'Employee not found' })

    const company = await Company.findOne({ employees: id })
    if (!company) return res.status(404).json({ message: 'Company not found' })
    await Company.updateOne(
      { employees: id },
      {
        $pull: {
          employees: mongoose.Types.ObjectId(req.body.id),
        },
      }
    )
    await Employee.deleteOne(id)
    await company.save()
    return res.status(200).json({ message: 'Employee deleted successfully' })
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const changeEmployee = async (req, res) => {
  try {
    const {
      personalNumber,
      firstName,
      startedAt,
      birthDate,
      companyId,
      lastName,
      position,
      id,
    } = req.body
    const company = await Company.findById(mongoose.Types.ObjectId(companyId))
    if (!company)
      return res.status(404).json({
        message: `Company with this id '${companyId}' does not exist!`,
      })

    const employee = await Employee.findById(mongoose.Types.ObjectId(id))
    if (!employee)
      return res.status(404).json({
        message: `Employee with this id '${id}' does not exist!`,
      })

    await Company.updateOne(
      { employees: id },
      {
        $pull: {
          employees: mongoose.Types.ObjectId(req.body.id),
        },
      }
    )
    await Company.findByIdAndUpdate(companyId, {
      $push: {
        employees: {
          _id: mongoose.Types.ObjectId(employee._id),
        },
      },
    })

    employee.personalNumber = personalNumber
    employee.firstName = firstName
    employee.birthDate = birthDate
    employee.companyId = companyId
    employee.startedAt = startedAt
    employee.lastName = lastName
    employee.position = position
    await employee.save()
    return res
      .status(200)
      .json({ message: 'Employee details changed successfully!' })
  } catch (err) {
    return res.status(404).json({
      message: err.message,
    })
  }
}
