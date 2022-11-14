import axios from "axios";
import { useState, useEffect } from "react";

const URI = "http://localhost:8000/account/login";

export const Login = (props) => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [accounts, setAccount] = useState();

  const getAccount = async () => {
    let res = await fetch(URI, {method: 'post', body:JSON.stringify({email: email, password: pass}), headers: {'Content-Type': 'application/json'}})
    res = await res.json();

    if(res.rol === "Admin" ){
        props.onFormSwitch('view')
    } else {
        props.onFormSwitch('saveData')
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-form-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit" onClick={getAccount}>Logearse</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('register')}>¿No tienes cuenta? Registrarte aqui.</button>
    </div>
  );
};

// export default CompLogin
