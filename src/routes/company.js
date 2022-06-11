import express from 'express'
import companyDetailsSchema from '../schemas/company-details-schema.js'
import companyIdSchema from '../schemas/company-Id-schema.js'
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
  companyIdSchema,
  validateRequestSchema,
  getOneCompany
)

router.delete(
  '/delete-company',
  authMiddleware,
  companyIdSchema,
  validateRequestSchema,
  deleteCompany
)

router.put(
  '/change-company',
  authMiddleware,
  companyIdSchema,
  companyDetailsSchema,
  validateRequestSchema,
  changeCompany
)

export default router
