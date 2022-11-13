import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Subcactegory = sequelize.define('subcategory', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    categoryId: {
        type:DataTypes.INTEGER
    },
    mainRackCleaning: {
        type: DataTypes.BLOB
    },
    mainOrderRack: {
        type: DataTypes.BLOB
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
    clearPc: {
        type: DataTypes.BLOB
    },
    accommodateCables: {
        type: DataTypes.BLOB
    },
    checkDisplay: {
        type: DataTypes.STRING
    }
})

await Subcactegory.sync()