import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Restaurants from './Restaurants'
import RestaurantDetail from './RestaurantDetail'
import SignInForm from './SignInForm'
import RegisterForm from './RegisterForm'


function Main() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Restaurants />} />
            <Route path="/restaurant/:id" element={<RestaurantDetail />} />
            <Route path="/signin" element={<SignInForm />} />
            <Route path="/register" element={<RegisterForm />} />
        </Routes>
    </div>
  )
}

export default Main