import React from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import {Routes, Route} from "react-router-dom"
import "./App.css";

const App = () => {
  return(
    <>
    <Routes>
       <Route path="/" element={<Dashboard/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/register" element={<Register/>}/>
    </Routes>
    {/* <Register/>
    <Login/> */}

    </>
  )
}

export default App;