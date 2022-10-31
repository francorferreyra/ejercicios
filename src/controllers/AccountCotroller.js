import {Account} from '../models/AccountModel.js'

export const getAccounts = (req, res)=>{
    res.send('account view')
}

export const createAccount = async(req, res) => {
    const {name, lastname, email, password} = req.body

    const newAccount = await Account.create({
        name,
        lastname,
        email,
        password,
    })

    console.log(newAccount)
    res.send('create')
}