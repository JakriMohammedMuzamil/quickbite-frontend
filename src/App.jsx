import React from 'react'
import Navbar from './components/Navbar'
import AppRoutes from './routings/AppRoutes'
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <AppRoutes />
      <Footer/>
    </div>
  )
}

export default App
