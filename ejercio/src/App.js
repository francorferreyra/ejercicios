import logo from './logo.svg';
import './App.css';
import {Login} from './blog/Login.js'
import { Register } from './blog/Register.js';
import { ViewCategory } from './blog/ViewCategory.js';
import {CreateCategory} from './blog/CreateCategory.js'
import React, { useState } from "react";

function App() {
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  if(currentForm === 'login'){
    return ( 
    <div className="App">
      <Login onFormSwitch={toggleForm}/>
    </div>
    )
  }
  if(currentForm === 'register'){
    return(
      <div className="App">
      <Register onFormSwitch={toggleForm}/>
    </div>
    )
  }
  if(currentForm === 'view'){
    return(
    <div className='App'>
      <ViewCategory onFormSwitch={toggleForm}/>
    </div>

    )
  }
  if(currentForm === 'saveData'){
    return(
      <div className='App'>
      <CreateCategory onFormSwitch={toggleForm}/>
    </div>
    )
  }

}

export default App;
