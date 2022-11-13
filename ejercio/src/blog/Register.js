import axios from "axios";
import { useState, useEffect } from "react";

const URI = "http://localhost:8000/account";

export const Register = (props) => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [password, setPassword] = useState();
  const [rol, setRol] = useState();
  const [accounts, registerAccount] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    
  };


  const createAccount = async() => {
    const user = {
        name: name,
        lastname: lastname,
        email: email,
        rol: rol,
        password: password,
    }
    const res = await axios.post(URI, user);
    registerAccount(res.data);
  }

  return (
    <div className="auth-form-container">
      <h1>Register</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Nombre" />
        <label htmlFor="name">Apellido</label>
        <input value={lastname} onChange={(e) => setLastname(e.target.value)} name="lastname" id="lastname" placeholder="Apellido" />
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="email" >Rol</label>
        <select value={rol} id='rol' name="rol" onChange={(e) => setRol(e.target.value)}>
            <option>Seleccione una opcion</option>
            <option >Microinformatica</option>
            <option>Telecomunicaciones</option>
            <option>Admin</option>

        </select>
        <label htmlFor="password">password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit" onClick={createAccount}>Registrar</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        ¿Ya tienes cuenta? Login.
      </button>
    </div>
  );
};
