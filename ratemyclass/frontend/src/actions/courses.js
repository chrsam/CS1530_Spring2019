import axios from 'axios';
import { GET_COURSES, DELETE_COURSE, ADD_COURSE } from './types';

// GET COURSES
export const getCourses = () => dispatch => {
    axios.get('/api/courses/')
        .then(response => {
            dispatch({
                type: GET_COURSES,
                payload: response.data
            });
        })
        .catch(error => console.log(error));
}

// DELETE COURSE 
export const deleteCourse = (id) => dispatch => {
    axios.delete(`/api/courses/${id}/`)
        .then(response => {
            dispatch({
                type: DELETE_COURSE,
                payload: id
            });
        })
        .catch(error => console.log(error));
}

// ADD COURSE 
export const addCourse = (course) => dispatch => {
    axios.post("/api/courses/", course)
        .then(response => {
            dispatch({
                type: ADD_COURSE,
                payload: response.data
            });
        })
        .catch(error => console.log(error));
}