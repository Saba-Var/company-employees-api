import Company from '../models/Company.js'

export const addCompany = async (req, res) => {
  const { name, website, logoUrl, establishmentDate } = req.body

  const newUser = await new Company({
    name,
    website,
    logoUrl,
    establishmentDate,
  })

  await newUser
    .save()
    .then(() => {
      console.log('Company created successfully')
      return res
        .status(201)
        .send({ message: 'Success! Company saved successfully' })
    })
    .catch((err) => res.status(404).json({ message: err.message }))
}

export const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find()
    return res.status(200).json(companies)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const getOneCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.body.id)
    return res.status(200).json(company)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}
