import { createStore, combineReducers } from 'redux'

import overallResult from './reducers/overallResult'
import exstendedResult from './reducers/exstendedResult'

const rootReducer = combineReducers({
  ovRes: overallResult,
  exRes: exstendedResult,
  
})

let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.st = store;


export default store;