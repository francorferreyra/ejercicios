import { Router } from "express";
import {getCategory, createCategory} from '../controllers/CategoryController.js'
const router = Router()

router.get('/category', getCategory)
router.post('/category', createCategory)
router.get('/category/:id')

export default router