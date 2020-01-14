import { axiosWithAuth } from "../components/AxiosWithAuth";
import axios from "axios";
import { bindActionCreators } from "redux";

export const ERROR = "ERROR";
export const LOGIN = "LOGIN";
export const ADD_PROPERTY = "ADD_PROPERTY";
export const GET_PROPERTIES = "GET_PROPERTIES";
export const UPDATE_PROPERTIES = "UPDATE_PROPERTIES";
export const LOGGING_IN = "LOGGING_IN";
export const SET_USER = "SET_USER";
export const DELETE_PROPERTY = "DELETE_PROPERTY";
export const LOGOUT = "LOGOUT";

const URL = "https://optimal-airbnb-pricing-api.herokuapp.com";

//user should be an object with a username and and password?
export const login = (user, fn) => dispatch => {
  // return dispatch({type: LOGIN, payload: user});

  axios
    .post("https://optimal-airbnb-pricing-api.herokuapp.com/login", user)
    .then(res => {
      console.log(res.data.user.id);
      dispatch({ type: LOGIN, payload: res.data.user.id });
      window.localStorage.setItem("token", res.data.token);
      fn(`/user/${res.data.user.id}`);
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
      console.log("error");
    });
};

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
  window.localStorage.removeItem("token");
};

export const getUserInfo = id => dispatch => {
  return;
};

export const setUser = user => dispatch => {
  dispatch({ type: SET_USER, payload: user });
};

// add axios call here, and pass userid instead of properties
export const updateProperties = userid => dispatch => {
  axiosWithAuth()
    .get(`/user/${userid}/properties`)
    .then(res => {
      //need to add call to update state with property info
      dispatch({ type: UPDATE_PROPERTIES, payload: res.data.user_properties });
    })
    .catch(err => console.log(err));
};

export const deleteProperty = (userid, propertyid) => dispatch => {
  axiosWithAuth().delete(`/user/${userid}/properties/${propertyid}`);
  dispatch({ type: DELETE_PROPERTY, payload: userid });
};
