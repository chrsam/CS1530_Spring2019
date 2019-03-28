import axios from 'axios';
import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT_SUCCESS} from './types';

// Checks the token and loads the user
export const loadUser = () => (dispatch, getState) => {

    dispatch({type: USER_LOADING});

    axios.get("/api/auth/user", tokenConfig(getState))
        .then(response => {
            dispatch({
                type: USER_LOADED,
                payload: response.data
            });
        })
        .catch(error => {
            dispatch({
                type: AUTH_ERROR
            });
        });
}
// LOGIN USER
export const login = (username, password) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // request body
    const body = JSON.stringify({username, password});

    axios.get("/api/auth/login", body,config)
        .then(response => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            });
        })
        .catch(error => {
            dispatch({
                type: LOGIN_FAIL
            });
        });
};
//REGISTER USER
export const register = ({username, email, password}) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // request body
    const body = JSON.stringify({username, email, password});
    console.log(body)
    axios.post("/api/auth/register", body, config)
        .then(response => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: response.data
            });
        })
        .catch(error => {
            dispatch({
                type: REGISTER_FAIL
            });
        });
};

//LOGOUT USER
export const logout = () => (dispatch, getState) => {

    axios.post("/api/auth/logout/", null, tokenConfig(getState))
        .then(response => {
            dispatch({
                type: LOGOUT_SUCCESS
            });
        })
        .catch(error => {
            dispatch({
                // RETURN ERROR
            });
        });
}

// setup config with token - helper function
export const tokenConfig = getState => {
  const token = getState().auth.token;

  const config = {
      headers: {
          'Content-Type': 'application/json'
      }
  };

  if (token) {
      config.headers['Authorization'] = `Token ${token}`;
  }
  return config;
}
