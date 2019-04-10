import axios from 'axios';
import { returnErrors } from './messages';
import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS , LOGOUT_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS} from './types';

// CHECK TOKEN AND LOAD USER
export const loadUser = () => (dispatch, getState) => {

  axios.get('/api/auth/user', tokenConfig(getState))
    .then(res => {
      if (res.data.id == null ) {
        dispatch({
          type: AUTH_ERROR
        })
      } else {
        dispatch ({
          type: USER_LOADED,
          payload: res.data,

        })
      }
    }).catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({type: AUTH_ERROR})
    })
}

// LOGIN USER
export const login = (username, password) => dispatch => {
  // HEADERS
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({username, password})

  axios.post('/api/auth/login', body, config)
    .then(res => {
        dispatch ({
          type: LOGIN_SUCCESS,
          payload: res.data
        })
    }).catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({type: LOGIN_FAIL})
    })
}

// REGISTER USER
export const register = ({username, email, password}) => dispatch => {
  // HEADERS
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }


  const body = JSON.stringify({username, email, password})

  // console.log(body);
  axios.post('/api/auth/register', body, config)
    .then(res => {
        dispatch ({
          type: REGISTER_SUCCESS,
          payload: res.data
        })
    }).catch(err => {
      console.log("error")
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({type: REGISTER_FAIL})
    })
}

// CHECK TOKEN AND LOGOUT USER
export const logout = () => (dispatch, getState) => {

  axios.post('/api/auth/logout', null, tokenConfig(getState))
    .then(res => {
        dispatch({
          type: LOGOUT_SUCCESS
        })
    }).catch(err => {
      console.log("logout error");
      dispatch(returnErrors(err.response.data, err.response.status))
    })
}


// TOKEN HELPER FUNCTION
export const tokenConfig = getState => {
  // GET TOKEN FROM STATE
  const token = getState().auth.token;

  // HEADERS
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // IF TOKEN, ADD TO HEADERS CONFIG
  if(token) {
    config.headers['Authorization'] = `Token ${token}`
  }

  return config
}
