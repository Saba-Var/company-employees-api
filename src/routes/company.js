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
import { authMiddleware, validateRequestSchema } from '../middlewares/index.js'

const router = express.Router()

router.post(
  '/add-company',
  authMiddleware,
  companyDetailsSchema,
  validateRequestSchema,
  addCompany
)

router.get('/all-company', authMiddleware, getAllCompanies)

router.get(
  '/one-company',
  authMiddleware,
  idSchema,
  validateRequestSchema,
  getOneCompany
)

router.delete(
  '/delete-company',
  authMiddleware,
  idSchema,
  validateRequestSchema,
  deleteCompany
)

router.put(
  '/change-company',
  authMiddleware,
  idSchema,
  companyDetailsSchema,
  validateRequestSchema,
  changeCompany
)

export default router
