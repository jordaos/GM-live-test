import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import repositoriesReducer from './repositoriesReducer'

export default combineReducers({
  loginReducer,
  repositoriesReducer
});