import { GET_COURSES, GET_COURSE_BY_ID, DELETE_COURSE, ADD_COURSE } from "../actions/types.js";


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
    case GET_COURSE_BY_ID:
      return {
        ...state,
        courses: [action.payload] // The response is a single course so make it into an array
      }
    case DELETE_COURSE:
      return {
        ...state,
        courses: state.courses.filter(course => course.id !== action.payload)
      }
    case ADD_COURSE:
      state.requestFulfilled = true;
      return {
        ...state,
        courses: [...state.courses, action.payload]
      }
      default:
        return state;
  }
}
