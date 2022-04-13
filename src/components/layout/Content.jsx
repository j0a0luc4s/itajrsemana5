import React from 'react'
import { Routes, Route} from 'react-router-dom'

import './Content.css'
import AboutUs from '../../views/aboutUs/AboutUs'
import Home from '../../views/home/Home'
import Login from '../../views/login/Login'

const Content = props => (
  <main className="content">
    <Routes>
      <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
      <Route path='/login'element={<Login></Login>}></Route>
      <Route path='/' element={<Home></Home>}></Route>
    </Routes>
  </main>
)

export default Content