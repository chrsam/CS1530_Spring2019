import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './layout/Header';
import Courses from './Courses';
import AddCourseForm from './AddCourseForm';
import Login from './accounts/Login';
import Register from './accounts/Register';

import { Provider } from 'react-redux';
import store from '../store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Header />
                    <AddCourseForm />
                    <Switch>
                        <Route exact path="/" component={Courses} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                    </Switch>
                </Router>            
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));