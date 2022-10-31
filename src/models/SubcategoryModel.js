import {DataType} from 'sequelize'
import { sequelize } from '../database/database'

sequelize.define('account', {
    rackPrincipalLimpieza: {
        type: DataType.BLOB
    },
    rackPrincipalOrden: {
        type: DataType.BLOB
    },
    funcionamientoAP: {
        type: DataType.STRING
    },
    funcionamientoTelefono: {
        type: DataType.STRING
    },
    UPS: {
        type: DataType.STRING
    },
    limparPc: {
        type: DataType.BLOB
    },
    acomodarCables: {
        type: DataType.BLOB
    },
    checkVisualizacion: {
        type: DataType.STRING
    }

    
})