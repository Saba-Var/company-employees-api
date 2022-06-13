import mongoose from 'mongoose'
import Company from '../models/Company.js'

export const addCompany = async (req, res) => {
  try {
    const { name, website, logoUrl, establishmentDate } = req.body

    const notUnique = await Company.findOne({ name })
    if (notUnique)
      return res
        .status(400)
        .json({ message: `Company '${name}' already exists` })
    await new Company({
      name,
      website,
      logoUrl,
      establishmentDate,
    }).save()

    return res
      .status(201)
      .send({ message: 'Success! Company saved successfully' })
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find()
      .select('-__v')
      .populate('employees', '-__v -worksInCompanyId')

    if (companies.length === 0) return res.status(200).json({})
    return res.status(200).json(companies)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const getOneCompany = async (req, res) => {
  try {
    const { id } = req.body
    const currentCompany = await Company.findById(id)
      .select('-__v')
      .populate('employees', '-__v -worksInCompanyId')
    if (!currentCompany)
      return res.status(404).json({ message: 'Company not found' })
    return res.status(200).json(currentCompany)
  } catch (error) {
    return res.status(404).json({ message: error.message })
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
    return res.status(404).json({ message: error.message })
  }
}

export const changeCompany = async (req, res) => {
  try {
    const { id, name, website, logoUrl, establishmentDate } = req.body
    const company = await Company.findById(id)
    company.establishmentDate = establishmentDate
    company.website = website
    company.logoUrl = logoUrl
    company.name = name
    await company.save()

    return res
      .status(200)
      .json({ message: 'Company details changed successfully!' })
  } catch (err) {
    return res.status(404).json({
      message: err.message,
    })
  }
}
