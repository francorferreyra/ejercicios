import axios from "axios";
import { useState, useEffect } from "react";

const URI = "http://localhost:8000/subcategory";

export const ViewCategory = (props) => {
  const [categorys, setCategory] = useState([]);

  useEffect(() => {
    getSubcategory();
  }, []);

  const getSubcategory = async () => {
    const res = await axios.get(URI);
    setCategory(res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='auth-form-container'>
        <div className='row'>
            <div className='col'>
                <table className='table'>
                    <thead className='table-primary'>
                        <tr>
                            <th>Categoria</th>
                            <th>Rack Principal (Orden)</th>
                            <th>Rack Principal (Limpieza)</th>
                            <th>Funcionamiento Ap</th>
                            <th>Funcionamiento Teléfono</th>
                            <th>Ups</th>
                            <th>Limpiar Pc</th>
                            <th>Acomodar Cables</th>
                            <th>Chequear Visualizacion</th>
                        </tr>
                    </thead>
                    <tbody>
                        { categorys.map ( (category) => (
                            <tr key={ category.id}>
                                <td> { category.categoryId} </td>
                                <td> { category.mainOrderRack } </td>
                                <td> { category.mainRackCleaning } </td>
                                <td> { category.apOperation} </td>
                                <td>{category.telephoneOperation}</td>
                                <td>{category.UPS}</td>
                                <td>{category.clearPc}</td>
                                <td>{category.accommodateCables}</td>
                                <td>{category.checkDisplay}</td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>    
        </div>
    </div>
    // <div className="auth-form-container">
    //   <h1>Listado</h1>
    //   <form className="login-form" onSubmit={handleSubmit}>
    //     <div className="category">
    //         {
    //             categorys.map(category => {
    //                 return (
    //                 <div>Categoria: {category.categoryId}</div>
    //                 )
    //             })
    //         }
    //     </div>
    //   </form>
    // </div>
    
  );
};
