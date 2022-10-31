import {DataType} from 'sequelize'
import { sequelize } from '../database/database'


sequelize.define('account', {
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoInccrement: true,
    },
    category: {
        type: DataType.STRING
    },

    
})