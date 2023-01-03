import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    const getRestaurants = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/restaurants/"
      );
      setRestaurants(response.data);
      console.log(response.data);
    };
    getRestaurants();
  }, []);

  return restaurants ? (
    <div className="rest-row">
      <div className="rest-column">
        {restaurants.map((restaurant) => (
          <div
            style={{ backgroundImage: `url(${restaurant.restaurant_picture})` }}
            className="rest-card"
            key={restaurant.id}
          >
            <Link to={`/restaurants/${restaurant.id}`} className="rest-name">
              <div className="rest-info">
                <h3>{restaurant.name}</h3>
                <h4>{restaurant.cuisine_type}</h4>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default Restaurants;
