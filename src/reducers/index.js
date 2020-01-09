import * as actionTypes from '../actions';

const initialState = {
    loggedIn: false,
    loggingIn: false,
    loadingPage: false,
    properties: [],
    username: '',
    userid: ''
    }

    export const reducer = (state = initialState, action) => {
        switch (action.type) {
            default: 
            return state;
        }
    }
