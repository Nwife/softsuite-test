// reducers/index.js
import { combineReducers } from 'redux';

//reducers
import elementReducer from './reducers/elementReducer';

const rootReducer = combineReducers({
  element: elementReducer

});

export default rootReducer;
