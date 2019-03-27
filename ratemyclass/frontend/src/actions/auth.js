import axios from 'axios';
import { USER_LOADED, USER_LOADING, AUTH_ERROR } from './types';

// Checks the token and loads the user
export const loadUser = () => (dispatch, getState) => {
    dispatch({type: USER_LOADING});

    const token = getState().auth.token;

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios.get("/api/auth/user", config)
        .then(response => {
            dispatch({
                type: USER_LOADED,
                payload: response.data
            });
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data, error.response.status));
        });
}