import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './layout/Header';
import Courses from './Courses';
import AddCourseForm from './AddCourseForm';
import Login from './accounts/Login';
import Register from './accounts/Register';

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';
import PrivateRoute from './common/PrivateRoute';


class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Header />
                    <AddCourseForm />
                    <Switch>
                        <PrivateRoute exact path="/" component={Courses} />
                        <PrivateRoute exact path="/register" component={Register} />
                        <PrivateRoute exact path="/login" component={Login} />
                    </Switch>
                </Router>            
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));