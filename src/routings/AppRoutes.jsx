import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Restaurants from '../pages/Restaurants'
import About from '../pages/About'
import Contact from '../pages/Contact'


const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/restaurants' element={<Restaurants/>}/>
        <Route path='/aboutus' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </div>
  )
}

export default AppRoutes
