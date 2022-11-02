import { Account } from '../models/AccountModel.js'

export const getAccounts = (req, res)=>{
    res.send('account view')
}

export const createAccount = async(req, res) => {
    const {name, lastname, email, password} = req.body

    const newAccount = await Account.create({
        name: name,
        lastname: lastname,
        email: email,
        password: password,
    })

    console.log(newAccount)
    res.send('create')
}