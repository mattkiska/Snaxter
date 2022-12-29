import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function RestaurantDetail() {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState(null)
  useEffect(() => {
    const getRestaurant = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/restaurants/${id}`
        )
      setRestaurant(response.data)
      console.log(response.data)
    }
    getRestaurant()
  }, [])
  
  return restaurant ? (
    <div className="container">
      <div className="row">
        <div className="restaurant-detail">
          <img src={restaurant.restaurant_picture} alt={restaurant.name} height="250px"/>
          <h3>{restaurant.name}</h3>
          <p>{restaurant.address}</p>
          <p>{restaurant.phone}</p>
          <p>{restaurant.email}</p>
          <p>{restaurant.website}</p>
          <p>{restaurant.opens}</p>
          <p>{restaurant.closes}</p>
          <p>{restaurant.description}</p>
          </div>
        <div className="menu">
          <h3>Menu</h3>
          {restaurant.menu_items.map((item) => (
            <div className="menu-item" key={item.id}>
              <img src={item.item_picture} alt={item.name} height="250px"/>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  )
}



export default RestaurantDetail