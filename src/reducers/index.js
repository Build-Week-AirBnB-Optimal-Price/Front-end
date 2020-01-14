import * as actionTypes from "../actions";

const initialState = {
  loggedIn: false,
  loggingIn: false,
  loadingPage: false,
  properties: [],
  username: "",
  first_name: "",
  id: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        loggedIn: true,
        id: action.payload
      };
    // case actionTypes.GET_PROPERTIES:
    // return {
    //   ...state,
    //   properties: [...state.properties, action.payload]
    // };

    // case actionTypes.ADD_PROPERTY:
    //   return {
    //     ...state,
    //     properties: [...state.properties, action.payload]
    //   };

    case actionTypes.SET_USER:
      return {
        ...state,
        username: action.payload.username,
        first_name: action.payload.first_name
      };
    case actionTypes.UPDATE_PROPERTIES:
      return {
        ...state,
        properties: action.payload.map(p => {
          return p;
        })
      };
    // case actionTypes.DELETE_PROPERTY:
    //   return {
    //     ...state,
    //     properties: state.properties.filter(p => p !== action.payload)
    //   };
    case actionTypes.LOGOUT:
      return {
        ...state,
        state: initialState
      };

    default:
      return state;
  }
};

export default reducer;
