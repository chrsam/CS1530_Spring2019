import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import Courses from './Courses';
import AddCourseForm from './AddCourseForm';

import { Provider } from 'react-redux';
import store from '../store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Header />
                <AddCourseForm />
                <Courses />               
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))