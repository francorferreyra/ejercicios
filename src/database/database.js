import Sequelize from 'sequelize'

export const sequelize = new Sequelize('ejerciciosdb', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})