import {DataTypes} from 'sequelize'
import { sequelize } from '../database/database.js'
import { Subcactegory } from './SubcategoryModel.js'

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
    timestamps: true,
  }
)

Category.hasMany(Subcactegory, {
    foreinkey: 'subcategoryId',
    sourceKey: 'id'
})

Subcactegory.belongsTo(Category,{
    foreinkey: 'subcategoryId',
    targetId: 'id'
})

await Category.sync()
