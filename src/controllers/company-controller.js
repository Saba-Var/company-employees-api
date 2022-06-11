import mongoose from 'mongoose'
import Company from '../models/Company.js'

export const addCompany = async (req, res) => {
  try {
    const { name, website, logoUrl, establishmentDate } = req.body
    const newUser = await new Company({
      name,
      website,
      logoUrl,
      establishmentDate,
    })
    await newUser.save().then(() => {
      console.log('Company saved successfully')
      return res
        .status(201)
        .send({ message: 'Success! Company saved successfully' })
    })
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
  return null
}

export const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find()
    if (companies.length === 0)
      return res.status(404).json({ message: 'Company list is empty' })
    return res.status(200).json(companies)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const getOneCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.body.id)
    if (!company) return res.status(404).json({ message: 'Company not found' })
    return res.status(200).json(company)
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
