import {DataType} from 'sequelize'
import { sequelize } from '../database/database'

sequelize.define('account', {
    mainRackCleaning: {
        type: DataType.BLOB
    },
    mainOrderRack: {
        type: DataType.BLOB
    },
    apOperation: {
        type: DataType.STRING
    },
    telephoneOperation: {
        type: DataType.STRING
    },
    UPS: {
        type: DataType.STRING
    },
    clearPc: {
        type: DataType.BLOB
    },
    accommodateCables: {
        type: DataType.BLOB
    },
    checkDisplay: {
        type: DataType.STRING
    }

    
})