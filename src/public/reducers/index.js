import { combineReducers } from 'redux';

// import all reducers
import notes from './note';

// combine them
const appReducer = combineReducers({
    // auth,
    notes // es6 shorthand from notes: notes
})

export default appReducer;