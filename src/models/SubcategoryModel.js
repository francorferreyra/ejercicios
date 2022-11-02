import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

sequelize.define('account', {
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