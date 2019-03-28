// Courses reducer

import { GET_COURSES, DELETE_COURSE, ADD_COURSE } from '../actions/types.js';

const initialState = {
    courses: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_COURSES:
            return {
                ...state,
                courses: action.payload
            }
        case DELETE_COURSE:
            return {
                ...state,
                courses: state.courses.filter(course => course.id !== action.payload) // Return all the courses that weren't deleted
            }
        case ADD_COURSE:
            return {
                ...state,
                courses: [...state.courses, action.payload] // The payload is the new course
            }
        default:
            return state;
    }
}
