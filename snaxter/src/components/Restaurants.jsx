import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Restaurants() {
  const [restaurants, setRestaurants] = useState([])
  useEffect(() => {
    const getRestaurants = async () => {
      const response = await axios.get('http://localhost:8000/restaurants')
      setRestaurants(response.data)
    }
    getRestaurants()
    console.log(restaurants)
  }, [])

  return restaurants ? (
    <div className="container">
      <div className="row">
        {restaurants.map((restaurant) => (
          <div className="restaurants" key={restaurant.id}>
            <Link to={`/restaurants/${restaurant.id}`}>
              <img src={restaurant.restaurant_picture} alt={restaurant.name} height="250px"/>
              <h3>{restaurant.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  )
}

export default Restaurants