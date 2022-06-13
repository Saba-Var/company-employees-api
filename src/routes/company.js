import express from 'express'
import companyDetailsSchema from '../schemas/company-details-schema.js'
import idSchema from '../schemas/id-schema.js'
import {
  addCompany,
  getAllCompanies,
  getOneCompany,
  deleteCompany,
  changeCompany,
} from '../controllers/company-controller.js'
import { validateRequestSchema } from '../middlewares/index.js'

const router = express.Router()

router.get('/all-company', getAllCompanies)

router.post('/get-one-company', idSchema, validateRequestSchema, getOneCompany)

router.delete('/delete-company', idSchema, validateRequestSchema, deleteCompany)

router.post(
  '/add-company',
  companyDetailsSchema,
  validateRequestSchema,
  addCompany
)

router.put(
  '/change-company',
  idSchema,
  companyDetailsSchema,
  validateRequestSchema,
  changeCompany
)

export default router
