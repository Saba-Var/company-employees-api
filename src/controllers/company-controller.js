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
    const { id } = req.body
    await Company.findById(id).then((currentCompany) =>
      res.status(200).json(currentCompany)
    )
  } catch (error) {
    return res.status(404).json({ message: 'Company not found' })
  }
  return null
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
    const notUnique = await Company.findOne({ name })
    if (notUnique)
      return res.status(400).json({
        message: `Company with name '${name}' already exists! Change company name.`,
      })

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
      message: `Company with this id ('${req.body.id}') does not exist!`,
    })
  }
}
