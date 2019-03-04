import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <Link to='/'>Home</Link>
      </ul>
    </nav>
  </header>
)

export default Header
