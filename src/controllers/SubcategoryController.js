import { Subcactegory } from "../models/SubcategoryModel.js";
import multer from 'multer';
import * as path from 'path';


export const getSubcategory = async(req, res)=>{
    try {
        const subcategory = await Subcactegory.findAll()
        res.json(subcategory)

    } catch(err) {
        return res.status(500).json({message: err.message})
    }
    
}

export const createSubcategory = async(req, res) => {
    const {mainRackCleaning, mainOrderRack, apOperation, telephoneOperation, UPS, clearPc, accommodateCables, checkDisplay, categoryId} = req.body

   try {
    const newSubcategpry= await Subcactegory.create({
        categoryId: categoryId,
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

export const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() +path.extname(file.originalname))
    }
})

export const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
})