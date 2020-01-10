import * as actionTypes from '../actions';

const initialState = {
    loggedIn: false,
    loggingIn: false,
    loadingPage: false,
    properties: [],
    username: '',
    first_name: '',
    id: 'TEST'
    };

    

    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case actionTypes.LOGIN: 
                return {
                    ...state, 
                    loggedIn: true,
                    id: action.payload
                };
            case actionTypes.GET_PROPERTIES:
                return {
                    ...state,
                    properties: [...state.properties, action.payload]
                };

            case actionTypes.ADD_PROPERTY:
                return {
                    ...state, properties: [...state.properties, action.payload]
                };
            case actionTypes.SET_USER:
                return {
                    ...state,
                    username: action.payload.username,
                    first_name: action.payload.first_name
                }
            default: 
                return state;
        }
    };

    export default reducer;