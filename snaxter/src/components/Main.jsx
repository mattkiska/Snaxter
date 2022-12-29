import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Restaurants from './Restaurants'
import RestaurantDetail from './RestaurantDetail'
import SignInForm from './SignInForm'
import RegisterForm from './RegisterForm'
import Home from './Home'


function Main() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/restaurants/:id" element={<RestaurantDetail />} />
            <Route path="/signin" element={<SignInForm />} />
            <Route path="/register" element={<RegisterForm />} />
        </Routes>
    </div>
  )
}

export default Main