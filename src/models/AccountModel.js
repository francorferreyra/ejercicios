import {DataType} from 'sequelize'
import { sequelize } from '../database/database'

sequelize.define('account', {
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoInccrement: true,
    },
    name: {
        type: DataType.STRING
    },
    lastname: {
        type: DataType.STRING
    },
    email: {
        type: DataType.STRING,
        required: true,
        unique: true,
    },
    password:{
        type: DataType.STRING
    }
    
})