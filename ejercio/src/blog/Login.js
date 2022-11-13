
import axios from 'axios'
import { useState, useEffect } from 'react'

const URI = 'http://localhost:8000/account'

const CompLogin = () => {
    const [accounts, setAccount] = useState([])
    useEffect(() => {
        getAccounts()
    }, [])

    const getAccounts = async ( ) => {
        const res = await axios.get(URI)
        setAccount(res.data)
    }

    return(
        <div className='container'>
        <div className='row'>
            <div className='col'>
                <table className='table'>
                    <thead className='table-primary'>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                            <th>Rol</th>
                        </tr>
                    </thead>
                    <tbody>
                        { accounts.map ( (account) => (
                            <tr key={ account.id}>
                                <td> { account.name} </td>
                                <td> { account.lastname } </td>
                                <td> { account.email } </td>
                                <td> { account.rol} </td>

                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>    
        </div>
    </div>
    )
}

export default CompLogin