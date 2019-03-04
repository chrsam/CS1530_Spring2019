import React, { Component } from 'react';
import Home from './Home'
import { Switch, Route } from 'react-router-dom'
import SignIn from './SignIn'
import Register from './Register'

class App extends Component {
  render() {
    return (
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/signin' component={SignIn}/>
      <Route path='/register' component={Register}/>
    </Switch>
    );
  }
}

export default App;
