import { Category } from '../models/CategoryModels.js'

export const getCategory = async(req, res)=>{
    try {
        const category = await Category.findAll()
        res.json(category)

    } catch(err) {
        return res.status(500).json({message: err.message})
    }
    
}

export const createCategory = async(req, res) => {
    const {category} = req.body

   try {
    const newCategory = await Category.create({
        category: category
    })

    res.json(newCategory)
   }catch (err) {
    return res.status(500).json({message: err.message})

   }
    
}