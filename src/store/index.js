import { createStore } from 'redux';

const INITIAL_STATE = {
     session: {
         cities:[],
         favourites:[]
     },
     meta: {
         selected:{}
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
                ...state, favourites: {
                    ...state.favourites, favourites: action.favourites
                }
            }
        default:
            return state
    }
}

const store = createStore(contents);

export default store;
