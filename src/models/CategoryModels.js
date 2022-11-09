import {DataTypes} from 'sequelize'
import { sequelize } from '../database/database.js'

export const Category = sequelize.define('category', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    category: {
        type: DataTypes.STRING
    },
},
{
    timestamps: false,
  }
)

await Category.sync()
