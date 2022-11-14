import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Subcactegory = sequelize.define('subcategory', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    categoryId: {
        type:DataTypes.STRING,
        require: true
    },
    //images
    mainRackCleaning: {
        type: DataTypes.STRING,
    },
    //images
    mainOrderRack: {
        type: DataTypes.STRING,
    },
    apOperation: {
        type: DataTypes.STRING
    },
    telephoneOperation: {
        type: DataTypes.STRING
    },
    UPS: {
        type: DataTypes.STRING
    },
    //images
    clearPc: {
        type: DataTypes.STRING,
    },
    //images
    accommodateCables: {
        type: DataTypes.STRING,
    },
    checkDisplay: {
        type: DataTypes.STRING
    }
})

await Subcactegory.sync()