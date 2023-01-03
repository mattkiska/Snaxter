import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext'
import Restaurants from './Restaurants'
import RestaurantDetail from './RestaurantDetail'
import SignInForm from './SignInForm'
import RegisterForm from './RegisterForm'
import Home from './Home'
import PrivateRoute from '../utils/PrivateRoute'
import { useState } from 'react'



function Main(props) {
  const { onAdd, onRemove } = props
  return (
    <div>
        <Routes>
            <Route path="/" element={ 
                    <Home />
            } />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/restaurants/:id" element={<RestaurantDetail 
                onAdd={onAdd}
                onRemove={onRemove}
            />} />
            <Route path="/signin" element={<SignInForm />} />
            <Route path="/register" element={<RegisterForm />} />
        </Routes>
    </div>
  )
}

export default Main