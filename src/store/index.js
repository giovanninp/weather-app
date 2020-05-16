import { createStore } from 'redux';

const INITIAL_STATE = {
     session: {
         cities:[],
         favourites:[]
     },
     meta: {
         selected:{}
     },
     device:{
         granted:false,
         position:{}
     }
};

const contents = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "UPDATE_SESSIONS_CITIES":
            return {
                 ...state, cities: {
                    ...state.cities, cities: action.cities
                }
            }
        case "UPDATE_SESSION_FAVOURITES":
            return {
                ...state, session: {
                    ...state.favourites, favourites: action.favourites
                }
            }
        case "ADD_SESSION_FAVOURITES":
            return {
                ...state, session: {
                    ...state.session, favourites:[...state.favourites,action.newFav]
                }
            }
        case "UPDATE_DEVICE_POSITION":
            return {
                ...state, device:{
                    ...state.device, position: action.position
                }
            }
        case "UPDATE_DEVICE_GRANTED":
            return {
                ...state, device: {
                    ...state.device, granted: action.granted
                }
            }
        default:
            return state
    }
}

const store = createStore(contents);

export default store;
