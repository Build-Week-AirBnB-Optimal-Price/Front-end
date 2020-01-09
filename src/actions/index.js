import { axiosWithAuth } from "../components/AxiosWithAuth";
import axios from 'axios'

export const ERROR = 'ERROR';
export const LOGIN = 'LOGIN';
export const ADD_PROPERTY = 'ADD_PROPERTY';
export const LOGGING_IN = 'LOGGING_IN';

const URL = 'https://optimal-airbnb-pricing-api.herokuapp.com'; 

//user should be an object with a username and and password? 
export const login = user => dispatch => {
    console.log("AFKHJEBAEIUFBAIEUFBIUAEFIBFIF", user);
    // return dispatch({type: LOGIN, payload: user});

    axios.post('https://optimal-airbnb-pricing-api.herokuapp.com/login', user )
        .then(res => {
            console.log(res.data.user.id)
            dispatch({type: LOGIN, payload: res.data.user.id});
            window.localStorage.setItem('token', res.data.token);

        })
        .catch(err => {
            console.log('error')
        })
}
