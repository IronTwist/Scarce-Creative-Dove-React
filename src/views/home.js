import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Scarce Creative Dove</title>
        <meta property="og:title" content="Scarce Creative Dove" />
      </Helmet>
      <div className="home-container1">
        <div className="home-container2">
          <h1>NBA Live BBall</h1>
        </div>
        <div className="home-container3">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1518407613690-d9fc990e795f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fE5CQXxlbnwwfHx8fDE3MDAyMTQ4NTJ8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=200"
            className="home-image"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
