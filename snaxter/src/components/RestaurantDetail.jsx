import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function RestaurantDetail(props) {
  const { onAdd, onRemove } = props
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState(null)
  const [cart, addToCart] = useState([])
  useEffect(() => {
    const getRestaurant = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/restaurants/${id}/`
        )
      setRestaurant(response.data)
      console.log(response.data)
    }
    getRestaurant()
  }, [])
  
  return restaurant ? (
    <div className="detail-container">
      <div className="detail-row">
        <div className="restaurant-detail">
          <img src={restaurant.restaurant_picture} alt={restaurant.name} height="200px"/>
          <h3>{restaurant.name}</h3>
          <p>{restaurant.address}</p>
          <p>{restaurant.phone}</p>
          <p>{restaurant.website}</p>
          <p>{restaurant.description}</p>
          <p>Contact us at: {restaurant.email}</p>
          </div>
        <div className="menu">
          <h3>Menu</h3>
          {restaurant.menu_items.map((item) => (
            <div
              style={{backgroundImage: `url(${item.item_picture})`}}
              className="menu-item"
              key={item.id}>
              <div className="menu-item-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>${item.price}</p>
                <button onClick={()=> onAdd(item)}>Add to Cart</button>
              </div>
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