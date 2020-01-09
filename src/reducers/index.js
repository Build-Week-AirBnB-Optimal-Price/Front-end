import * as actionTypes from '../actions';

const initialState = {
    loggedIn: false,
    loggingIn: false,
    loadingPage: false,
    properties: [],
    username: '',
    id: 'TEST'
    };

    

    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case actionTypes.LOGIN: 
                return {
                    ...state, 
                    loggedIn: true,
                    id: 'test2'
                };

            case actionTypes.ADD_PROPERTY:
                return {
                    ...state, properties: [...state.properties, action.payload]
                };
            default: 
                return state;
        }
    };

    export default reducer;