import { axiosWithAuth } from "../components/AxiosWithAuth";
import axios from 'axios'

export const ERROR = 'ERROR';
export const LOGIN = 'LOGIN';
export const ADD_PROPERTY = 'ADD_PROPERTY';
export const GET_PROPERTIES = 'GET_PROPERTIES';
export const LOGGING_IN = 'LOGGING_IN';
export const SET_USER = 'SET_USER'

const URL = 'https://optimal-airbnb-pricing-api.herokuapp.com'; 

//user should be an object with a username and and password? 
export const login = (user, fn) => dispatch => {
    // return dispatch({type: LOGIN, payload: user});

    axios.post('https://optimal-airbnb-pricing-api.herokuapp.com/login', user )
        .then(res => {
            console.log(res.data.user.id)
            dispatch({type: LOGIN, payload: res.data.user.id});
            window.localStorage.setItem('token', res.data.token);
        })
        // .then(res => {
        //     // populate user now that they are logged in
        //     axiosWithAuth()
        //         .get(`/user/${res.data.user.id}`)
        //             .then(res => {
        //                 console.log('ASODIUNAOEIFNOE', res)
        //             })
        //             .catch(err => {
        //                 console.log(err)
        //             })
        // })
        .catch(err => {
            console.log('error')
        })
}

export const getUserInfo = id => dispatch => {
    return 
}

export const setUser = user => dispatch => {
    dispatch({type: SET_USER, payload: user});
}