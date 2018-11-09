import { combineReducers } from 'redux';
import groceries from './groceryReducer';

const rootReducer = combineReducers({
  groceries
});

export default rootReducer;
