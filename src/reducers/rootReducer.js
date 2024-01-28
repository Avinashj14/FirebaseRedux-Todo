//rootReducer.js
import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import todoReducer from './todoReducer';



const rootReducer = combineReducers({
    auth: AuthReducer,
    todo: todoReducer
  });
  
  export default rootReducer;
