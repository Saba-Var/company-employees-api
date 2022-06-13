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
    const existingEmployee = await Employee.findOne({ personalNumber })
    if (existingEmployee)
      return res.status(400).json({
        message: `Employee with this personal number(${personalNumber}) already exists`,
      })
    const companyId = mongoose.Types.ObjectId(id)
    const currentCompany = await Company.findById(companyId).select(
      '-__v -employees -_id'
    )

    if (currentCompany) {
      const newEmployee = await Employee.create({
        firstName,
        lastName,
        startedAt,
        birthDate,
        personalNumber,
        position,
        companyId,
        company: currentCompany,
      })

      await Company.findByIdAndUpdate(companyId, {
        $push: {
          employees: {
            _id: mongoose.Types.ObjectId(newEmployee._id),
          },
        },
      })

      return res
        .status(200)
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
    const employees = await Employee.find().select('-__v')

    if (employees.length === 0) return res.status(200).json([])
    return res.status(200).json(employees)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const oneEmployee = async (req, res) => {
  try {
    const { id } = req.body
    const currentEmployee = await Employee.findById(id).select('-__v')
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
    const { companyId, id } = req.body
    const company = await Company.findById(
      mongoose.Types.ObjectId(companyId)
    ).select('-__v -employees -_id')

    if (!company && companyId)
      return res.status(404).json({
        message: `Company with this id '${companyId}' does not exist!`,
      })

    const employee = await Employee.findById(mongoose.Types.ObjectId(id))
    if (!employee)
      return res.status(404).json({
        message: `Employee with this id '${id}' does not exist!`,
      })

    if (companyId) {
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
      employee.company = company
    }

    for (const key in req.body) {
      if (key !== 'id') employee[key] = req.body[key]
    }

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
