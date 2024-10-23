import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Task from './views/tasks/tasks'
import Login from './views/login/login'
import Register from './views/register/register'
import Home from './views/home/home'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/task' element={<Task />} />
      </Routes>
    </div>
  )
}

export default App
