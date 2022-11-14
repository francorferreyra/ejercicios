import axios from "axios";
import { useState, useEffect } from "react";

const URI = "http://localhost:8000/subcategory";

export const CreateCategory = (props) => {

    const [subcategorys, createSubcategory] = useState([]);
    const [rackLimpieza, setLimpieza] = useState();
    const [rackOrden, setOrden] = useState();
    const [funcionamientoAp, setAp] = useState();
    const [funcionamientoTelefono, setTelefono] = useState();
    const [limpiarPC, setPc] = useState()
    const [cables, setCable] = useState()
    const [display, setDisplay] = useState()
    const [ups, setUps] = useState();

    const casaPrincipal = async() => {
        const casa = {
            categoryId: "Casa Principal",
            mainRackCleaning: rackLimpieza,
            mainOrderRack: rackOrden,
            apOperation: funcionamientoAp,
            telephoneOperation: funcionamientoTelefono,
            UPS: ups
        }
        const res = await axios.post(URI, casa);
        createSubcategory(res.data);
    }

    const balanza = async() => {
        const balanzaJson = {
            categoryId: "Balanza",
            mainRackCleaning: rackLimpieza,
            mainOrderRack: rackOrden,
            apOperation: funcionamientoAp,
            UPS: ups,
            telephoneOperation: funcionamientoTelefono,
            clearPc: limpiarPC,
        }
        const res = await axios.post(URI, balanzaJson);
        createSubcategory(res.data);
    }

    const camaras = async() => {
        const camaraJson = {
            categoryId: "Camaras",
            checkDisplay: display,
        }
        const res = await axios.post(URI, camaraJson);
        createSubcategory(res.data);
    }

    const taller = async() => {
        const tallerJson = {
            categoryId: "Taller",
            mainRackCleaning: rackLimpieza,
            mainOrderRack: rackOrden,
            apOperation: funcionamientoAp,
        }
        const res = await axios.post(URI, tallerJson);
        createSubcategory(res.data);
    }

    const hangar = async() => {
        const hangarJson = {
            categoryId: "Hangar",
            mainRackCleaning: rackLimpieza,
            mainOrderRack: rackOrden,
            apOperation: funcionamientoAp,
            telephoneOperation: funcionamientoTelefono,
        }
        const res = await axios.post(URI, hangarJson);
        createSubcategory(res.data);
    }

    const hangarOficina = async () => {
        const hangarOfc = {
            categoryId: "Hangar Oficina",
            telephoneOperation: funcionamientoTelefono,
            clearPc: limpiarPC,
            accommodateCables: cables,
        }
        const res = await axios.post(URI, hangarOfc);
        createSubcategory(res.data);
    }

    const exAgroinsumos = async() => {
        const exagro = {
            categoryId: "ExAgroinsumos",
            mainRackCleaning: rackLimpieza,
            mainOrderRack: rackOrden,
            apOperation: funcionamientoAp,
        }
        const res = await axios.post(URI, exagro);
        createSubcategory(res.data);
    }

  return (
    <div className="auth-form-container">
      <h1>Tareas</h1>
      <form className="register-form">
        <label htmlFor="name">Casa Principal</label>
        <label htmlFor="name">Rack Principal (Limpieza)</label>    
        <select 
          value={rackLimpieza}
          id="rol"
          name="rol"
          onChange={(e) => setLimpieza(e.target.value)}
        >
          <option>Seleccione una opcion</option>
          <option>Si</option>
          <option>No</option>
          <option>Observaciones</option>
        </select>
        <label htmlFor="name">Rack Principal (Orden)</label>    
        <select 
        value={rackOrden}
          id="rol"
          name="rol"
          onChange={(e) => setOrden(e.target.value)}
        >
          <option>Seleccione una opcion</option>
          <option>Si</option>
          <option>No</option>
          <option>Observaciones</option>
        </select>
        <label htmlFor="name">Funcionamiento AP</label>    
        <select
        value={funcionamientoAp}
          id="rol"
          name="rol" 
          onChange={(e) => setAp(e.target.value)}
        >
          <option>Seleccione una opcion</option>
          <option>Si</option>
          <option>No</option>
          <option>Observaciones</option>
        </select>
        <label htmlFor="name">Funcionamiento Telefono</label>    
        <select 
          value={funcionamientoTelefono} 
          id="rol"
          name="rol" 
          onChange={(e) => setTelefono(e.target.value)}
        >
          <option>Seleccione una opcion</option>
          <option>Si</option>
          <option>No</option>
          <option>Observaciones</option>
        </select>
        <label htmlFor="name">UPS</label>    
        <select
          value={ups}
          id="rol"
          name="rol" 
          onChange={(e) => setUps(e.target.value)}
        >
          <option>Seleccione una opcion</option>
          <option>Si</option>
          <option>No</option>
          <option>Observaciones</option>
        </select>
        <button type="submit" onClick={casaPrincipal}>Guardar Datos</button>

        <label htmlFor="name">ExAgroinsumos</label>
        <label htmlFor="name">Rack Principal (Limpieza)</label>    
        <select 
          value={rackLimpieza}
          id="rol"
          name="rol"
          onChange={(e) => setLimpieza(e.target.value)}
        >
          <option>Seleccione una opcion</option>
          <option>Si</option>
          <option>No</option>
          <option>Observaciones</option>
        </select>
        <label htmlFor="name">Rack Principal (Orden)</label>    
        <select 
        value={rackOrden}
          id="rol"
          name="rol"
          onChange={(e) => setOrden(e.target.value)}
        >
          <option>Seleccione una opcion</option>
          <option>Si</option>
          <option>No</option>
          <option>Observaciones</option>
        </select>
        <label htmlFor="name">Funcionamiento AP</label>    
        <select
        value={funcionamientoAp}
          id="rol"
          name="rol" 
          onChange={(e) => setAp(e.target.value)}
        >
          <option>Seleccione una opcion</option>
          <option>Si</option>
          <option>No</option>
          <option>Observaciones</option>
        </select>
        <button type="submit" onClick={exAgroinsumos}>Guardar Datos</button>

        <label htmlFor="name">Taller</label>
        <label htmlFor="name">Rack Principal (Limpieza)</label>    
        <select 
          value={rackLimpieza}
          id="rol"
          name="rol"
          onChange={(e) => setLimpieza(e.target.value)}
        >
          <option>Seleccione una opcion</option>
          <option>Si</option>
          <option>No</option>
          <option>Observaciones</option>
        </select>
        <label htmlFor="name">Rack Principal (Orden)</label>    
        <select 
        value={rackOrden}
          id="rol"
          name="rol"
          onChange={(e) => setOrden(e.target.value)}
        >
          <option>Seleccione una opcion</option>
          <option>Si</option>
          <option>No</option>
          <option>Observaciones</option>
        </select>
        <label htmlFor="name">Funcionamiento AP</label>    
        <select
        value={funcionamientoAp}
          id="rol"
          name="rol" 
          onChange={(e) => setAp(e.target.value)}
        >
          <option>Seleccione una opcion</option>
          <option>Si</option>
          <option>No</option>
          <option>Observaciones</option>
        </select>
        <button type="submit" onClick={taller}>Guardar Datos</button>

        <label htmlFor="name">Hangar</label>
        <label htmlFor="name">Rack Principal (Limpieza)</label>    
        <select 
          value={rackLimpieza}
          id="rol"
          name="rol"
          onChange={(e) => setLimpieza(e.target.value)}
        >
          <option>Seleccione una opcion</option>
          <option>Si</option>
          <option>No</option>
          <option>Observaciones</option>
        </select>
        <label htmlFor="name">Rack Principal (Orden)</label>    
        <select 
        value={rackOrden}
          id="rol"
          name="rol"
          onChange={(e) => setOrden(e.target.value)}
        >
          <option>Seleccione una opcion</option>
          <option>Si</option>
          <option>No</option>
          <option>Observaciones</option>
        </select>
        <label htmlFor="name">Funcionamiento AP</label>    
        <select
        value={funcionamientoAp}
          id="rol"
          name="rol" 
          onChange={(e) => setAp(e.target.value)}
        >
          <option>Seleccione una opcion</option>
          <option>Si</option>
          <option>No</option>
          <option>Observaciones</option>
        </select>
        <label htmlFor="name">Funcionamiento Telefono</label>    
        <select 
          value={funcionamientoTelefono} 
          id="rol"
          name="rol" 
          onChange={(e) => setTelefono(e.target.value)}
        >
          <option>Seleccione una opcion</option>
          <option>Si</option>
          <option>No</option>
          <option>Observaciones</option>
        </select>
        <button type="submit" onClick={hangar}>Guardar Datos</button>

        <label htmlFor="name">Hangar Oficina</label>
        <label htmlFor="name">Funcionamiento Telefono</label>    
        <select 
          value={funcionamientoTelefono} 
          id="rol"
          name="rol" 
          onChange={(e) => setTelefono(e.target.value)}
        >
          <option>Seleccione una opcion</option>
          <option>Si</option>
          <option>No</option>
          <option>Observaciones</option>
        </select>
        <label htmlFor="name">Limpiar Pc</label>    
        <select
        value={limpiarPC}
          id="rol"
          name="rol" 
          onChange={(e) => setPc(e.target.value)}
        >
          <option>Seleccione una opcion</option>
          <option>Si</option>
          <option>No</option>
          <option>Observaciones</option>
        </select>
        <label htmlFor="name">Acomodar Cables</label>    
        <select 
          value={cables} 
          id="rol"
          name="rol" 
          onChange={(e) => setCable(e.target.value)}
        >
          <option>Seleccione una opcion</option>
          <option>Si</option>
          <option>No</option>
          <option>Observaciones</option>
        </select>
        <button type="submit" onClick={hangarOficina}>Guardar Datos</button>

        <label htmlFor="name">Balanza</label>
        <label htmlFor="name">Rack Principal (Limpieza)</label>    
        <select 
          value={rackLimpieza}
          id="rol"
          name="rol"
          onChange={(e) => setLimpieza(e.target.value)}
        >
          <option>Seleccione una opcion</option>
          <option>Si</option>
          <option>No</option>
          <option>Observaciones</option>
        </select>
        <label htmlFor="name">Rack Principal (Orden)</label>    
        <select 
        value={rackOrden}
          id="rol"
          name="rol"
          onChange={(e) => setOrden(e.target.value)}
        >
          <option>Seleccione una opcion</option>
          <option>Si</option>
          <option>No</option>
          <option>Observaciones</option>
        </select>
        <label htmlFor="name">Funcionamiento AP</label>    
        <select
        value={funcionamientoAp}
          id="rol"
          name="rol" 
          onChange={(e) => setAp(e.target.value)}
        >
          <option>Seleccione una opcion</option>
          <option>Si</option>
          <option>No</option>
          <option>Observaciones</option>
        </select>
        <label htmlFor="name">Funcionamiento Telefono</label>    
        <select 
          value={funcionamientoTelefono} 
          id="rol"
          name="rol" 
          onChange={(e) => setTelefono(e.target.value)}
        >
          <option>Seleccione una opcion</option>
          <option>Si</option>
          <option>No</option>
          <option>Observaciones</option>
        </select>
        <label htmlFor="name">Limpiar Pc</label>    
        <select
        value={limpiarPC}
          id="rol"
          name="rol" 
          onChange={(e) => setPc(e.target.value)}
        >
          <option>Seleccione una opcion</option>
          <option>Si</option>
          <option>No</option>
          <option>Observaciones</option>
        </select>
        <label htmlFor="name">UPS</label>    
        <select
          value={ups}
          id="rol"
          name="rol" 
          onChange={(e) => setUps(e.target.value)}
        >
          <option>Seleccione una opcion</option>
          <option>Si</option>
          <option>No</option>
          <option>Observaciones</option>
        </select>
        <label htmlFor="name">Funcionamiento Telefono</label>    
        <select 
          value={funcionamientoTelefono} 
          id="rol"
          name="rol" 
          onChange={(e) => setTelefono(e.target.value)}
        >
          <option>Seleccione una opcion</option>
          <option>Si</option>
          <option>No</option>
          <option>Observaciones</option>
        </select>
        <button type="submit" onClick={balanza}>Guardar Datos</button>

        <label htmlFor="name">Camaras</label>
        <label htmlFor="name">Chequear visualizacion</label>    
        <select 
          value={display}
          id="rol"
          name="rol"
          onChange={(e) => setDisplay(e.target.value)}
        >
          <option>Seleccione una opcion</option>
          <option>Si</option>
          <option>No</option>
          <option>Observaciones</option>
        </select>
        <button type="submit" onClick={camaras}>Guardar Datos</button>

      </form>
    </div>
  );
};

