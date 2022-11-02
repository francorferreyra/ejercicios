import {DataTypes} from 'sequelize'
import { sequelize } from '../database/database.js'

export const Account = sequelize.define('account', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoInccrement: true,
    },
    name: {
        type: DataTypes.STRING
    },
    lastname: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        required: true,
        unique: true,
    },
    password:{
        type: DataTypes.STRING
    }
    
})
