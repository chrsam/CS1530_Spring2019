import { combineReducers } from 'redux';
import courses from "./courses";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

export default combineReducers({
  courses,
  errors,
  messages,
  auth

});
