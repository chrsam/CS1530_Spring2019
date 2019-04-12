import axios from 'axios';
import {createMessage, returnErrors} from './messages';
import { tokenConfig } from './auth';
import 'babel-polyfill'; // needed for async for some reason


import { GET_COURSES, DELETE_COURSE, ADD_COURSE} from "./types";

// GET COURSES
export const getCourses = () => async (dispatch, getState) => {
  axios.get('/api/courses/', tokenConfig(getState))
  .then(res => {
    dispatch({
      type: GET_COURSES,
      payload: res.data
    })
    console.log("returning data");
    console.log(res.data);
    return res.data;
  })
  .catch(err =>
    dispatch(returnErrors(err.response.data, err.response.status))
  )
}

// DELETE COURSES
export const deleteCourse = id => (dispatch, getState) => {
  axios.delete(`/api/courses/${id}/`, tokenConfig(getState))
  .then(res => {
    dispatch(createMessage({ courseDeleted: "Course Deleted" }))
    dispatch({
      type: DELETE_COURSE,
      payload: id
    })
  })
  .catch(err => console.log(err))
}

// ADD COURSES
export const addCourse = course => (dispatch, getState)  => {
  axios.post('/api/courses/', course, tokenConfig(getState))
  .then(res => {
    dispatch(createMessage({ courseAdded: "Course Added" }))
    dispatch({
      type: ADD_COURSE,
      payload: res.data
    })
    console.log(res.data);
  })
  .catch(err =>
    dispatch(returnErrors(err.response.data, err.response.status))
  )
}
