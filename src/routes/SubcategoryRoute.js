import { Router } from "express";
import {getSubcategory, createSubcategory} from '../controllers/SubcategoryController.js'

const router = Router()

router.get('/subcategory', getSubcategory)
router.post('/subcategory', createSubcategory)
router.put('/subcategory/:id')
router.get('/subcategpry/:id')

export default router