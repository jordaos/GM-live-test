import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import repositoriesReducer from './repositoriesReducer'
import mapReducer from './mapReducer'

export default combineReducers({
  loginReducer,
  repositoriesReducer,
  mapReducer
});