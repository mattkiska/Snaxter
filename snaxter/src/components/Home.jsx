import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <h1>Snaxter</h1>
        <h2>Find your next favorite restaurant</h2>
          <div className="home-buttons">
            <Link to="/restaurants">
              <button className="home-button">Restaurants</button>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default Home