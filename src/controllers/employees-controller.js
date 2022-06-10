import Employee from '../models/Employee.js'

export const addEmployee = async (req, res) => {
  const {
    firstName,
    lastName,
    startedAt,
    birthDate,
    personalNumber,
    position,
  } = req.body

  const newEmployee = await new Employee({
    firstName,
    lastName,
    startedAt,
    birthDate,
    personalNumber,
    position,
  })

  const notUnique = await Employee.findOne({ personalNumber })

  if (notUnique)
    return res.status(400).json({
      message: `User with this personal number(${personalNumber}) already exists`,
    })

  await newEmployee
    .save()
    .then(() => {
      console.log('Employee saved successfully')
      return res
        .status(201)
        .send({ message: 'Success! Employee created successfully' })
    })
    .catch((err) => res.status(400).json({ message: err.message }))

  return null
}
