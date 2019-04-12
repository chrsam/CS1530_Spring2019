import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom';

import { Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import CourseDashboard from './courses/CourseDashboard';
import AddCourse from './courses/AddCourse';
import ReviewDashboard from './reviews/ReviewDashboard';
import Homepage from './Homepage'
import Alerts from './layout/Alerts';
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import ViewCourse from "./courses/ViewCourse";
import PrivateRoute from "./common/PrivateRoute";

import { Provider } from  "react-redux";
import store from "../store";
import { loadUser }  from "../actions/auth";
import { CourseList } from './courses/CourseList';
import FindCourses from './courses/FindCourses';

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: 'middle'
}

class App extends Component {
  componentDidMount() {
      store.dispatch(loadUser())
  }

  render() {
    return (
      <Provider store = {store}>
      <AlertProvider template = {AlertTemplate}{...alertOptions}>
        <Router>
          <Fragment>
            <Header />
            <Alerts />
              <Switch>
                <Route exact path = "/courses" component = {CourseDashboard} />
                <Route exact path = "/addcourse" component = {AddCourse} />
                <Route exact path = "/register" component = {Register} />
                <Route exact path = "/login" component = {Login} />
                <Route exact path = "/reviews" component = {ReviewDashboard} />
                <Route exact path = "/viewcourse/:id" component = {ViewCourse} />
                <Route exact path = "/courselist" component = {CourseList} />
                <Route exact path = "/findcourses" component = {FindCourses} />

              </Switch>
              <Route exact path = "/" component = {Homepage} />

          </Fragment>
        </Router>
        </AlertProvider>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

//
// <Switch>
//   <PrivateRoute exact path = "/" component = {CourseDashboard} />
//   <Route exact path = "/register" component = {Register} />
//   <Route exact path = "/login" component = {Login} />
//
// </Switch>

// <div className = "container">
//   <div className="jumbotron mt-5">
//     <h1 className="display-4">Welcome to Rate My Class</h1>
//     <p className="lead">This is a application where students can add their courses and reviews on the course to share with other fellow students.</p>
//     <hr className="my-4" />
//     <p>Not a member?</p>
//     <button className="btn btn-success btn-lg" href="#" role="button">
//     <Link to="/register" className = "nav-link text-light" component = {Register}>
//     Join Now!
//     </Link>
//     </button>
//   </div>
// </div>
