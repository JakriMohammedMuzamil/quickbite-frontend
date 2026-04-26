import React from 'react'
import HeroSection from '../components/HeroSection'
import DishCard from '../components/DishCard'
import PopularDishes from '../components/PopularDishes'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <PopularDishes />
    </div>
  )
}

export default Home
