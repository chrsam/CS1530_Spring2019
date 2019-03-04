import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h1>Welcome to RateMyClass</h1>
    <Link to="/register">Register</Link>
    <br/>
    <Link to="/signin">Sign In</Link>
  </div>
)

export default Home
