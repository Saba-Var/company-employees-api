import mongoose from 'mongoose'
import Company from '../models/Company.js'

export const addCompany = async (req, res) => {
  try {
    const { name, website, logoUrl, establishmentDate } = req.body

    const existingCompany = await Company.findOne({ name })

    if (existingCompany)
      return res
        .status(400)
        .json({ message: `Company '${name}' already exists` })

    await Company.create({
      name,
      website,
      logoUrl,
      establishmentDate,
    })

    return res
      .status(201)
      .send({ message: 'Success! Company saved successfully' })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find()
      .select('-__v')
      .populate('employees', '-__v -companyId -company')

    if (companies.length === 0) return res.status(200).json([])
    return res.status(200).json(companies)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const getOneCompany = async (req, res) => {
  try {
    const { id } = req.body
    const currentCompany = await Company.findById(id)
      .select('-__v')
      .populate('employees', '-__v -companyId -company')
    if (!currentCompany)
      return res.status(404).json({ message: 'Company not found' })
    return res.status(200).json(currentCompany)
  } catch (error) {
    return res.status(422).json({ message: 'id is invalid' })
  }
}

export const deleteCompany = async (req, res) => {
  try {
    const id = { _id: mongoose.Types.ObjectId(req.body.id) }
    const company = await Company.findOne(id)
    if (!company) return res.status(404).json({ message: 'Company not found' })
    await Company.deleteOne(id)
    return res.status(200).json({ message: 'Company deleted successfully' })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const changeCompany = async (req, res) => {
  try {
    const { id } = req.body

    const company = await Company.findById(id).select('-employees -__v')

    for (const key in req.body) {
      if (key !== 'id') company[key] = req.body[key]
    }

    await company.save()
    return res
      .status(200)
      .json({ message: 'Company details changed successfully!' })
  } catch (err) {
    return res.status(404).json({
      message: 'Company not found',
    })
  }
}
