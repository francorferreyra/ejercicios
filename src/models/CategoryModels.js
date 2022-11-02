import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


sequelize.define('account', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoInccrement: true,
    },
    category: {
        type: DataTypes.STRING
    },

    
})