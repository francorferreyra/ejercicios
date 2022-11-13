import { Router } from "express";
import {getAccounts, createAccount} from "../controllers/AccountCotroller.js"

const router = Router()

router.get('/account', getAccounts)
router.post('/account', createAccount)
router.get('/account/:id')

export default router