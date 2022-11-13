import { Router } from "express";
import {getAccounts, createAccount, login} from "../controllers/AccountCotroller.js"

const router = Router()

router.get('/account', getAccounts)
router.post('/account', createAccount)
router.post('/account/login', login)

export default router