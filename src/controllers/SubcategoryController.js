import { Subcactegory } from "../models/SubcategoryModel.js";

export const getSubcategory = async(req, res)=>{
    try {
        const subcategory = await Subcactegory.findAll()
        res.json(subcategory)

    } catch(err) {
        return res.status(500).json({message: err.message})
    }
    
}

export const createSubcategory = async(req, res) => {
    const {mainRackCleaning, mainOrderRack, apOperation, telephoneOperation, UPS, clearPc, accommodateCables, checkDisplay} = req.body

   try {
    const newSubcategpry= await Subcactegory.create({
        mainRackCleaning: mainRackCleaning,
        mainOrderRack: mainOrderRack,
        apOperation: apOperation,
        telephoneOperation: telephoneOperation,
        UPS: UPS,
        clearPc: clearPc,
        accommodateCables: accommodateCables,
        checkDisplay: checkDisplay,
    })

    res.json(newSubcategpry)
   }catch (err) {
    return res.status(500).json({message: err.message})

   }
    
}