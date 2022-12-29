import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function RestaurantDetail() {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    const getRestaurant = async () => {
      const response = await axios.get(`http://localhost:8000/restaurants/${id}`)
      setRestaurant(response.data)
    }
    getRestaurant()
    console.log(restaurant)
  }, [])
  
  return restaurant ? (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <img src={restaurant.restaurant_picture} alt={restaurant.name} height="250px"/>
          <h3>{restaurant.name}</h3>
          <p>{restaurant.description}</p>
          <p>{restaurant.address}</p>
          <p>{restaurant.phone}</p>
          <p>{restaurant.email}</p>
          <p>{restaurant.website}</p>
          <p>{restaurant.opening_hours}</p>
          <p>{restaurant.closing_hours}</p>
          </div>
          <div className="col-12">
            <h3>Menu</h3>
            <div className="row">
              {restaurant.menu.map((food) => (
                <div className="col-4" key={food.id}>
                  <Link to={`/restaurants/${id}/food/${food.id}`}>
                    <img src={food.food_picture} alt={food.name} height="250px"/>
                    <h3>{food.name}</h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  )
}



export default RestaurantDetail