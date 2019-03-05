import React, {Component} from 'react'
import { Link } from 'react-router-dom'


class Home extends Component {
    render() {
        return (
            <div>
              <h1>Welcome to RateMyClass</h1>
              <Link to="/register">Register</Link>
              <br/>
              <Link to="/signin">Sign In</Link>
            </div>
          );
    }
}

export default Home
