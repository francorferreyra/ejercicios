import { Account } from '../models/AccountModel.js'


export const getAccounts = async(req, res)=>{
    try {
        const account = await Account.findAll()
        res.json(account)

    } catch(err) {
        return res.status(500).json({message: err.message})
    }
    
}

export const createAccount = async(req, res) => {
    const {name, lastname, email, password, rol} = req.body

   try {
    const newAccount = await Account.create({
        name: name,
        lastname: lastname,
        email: email,
        password: password,
        rol: rol,
    })

    res.json(newAccount)
   }catch (err) {
    return res.status(500).json({message: err.message})

   }
    
}