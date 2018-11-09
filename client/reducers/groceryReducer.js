import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function groceryReducer(state = initialState.groceries, action) {
  switch(action.type) {
    case types.LOAD_GROCERIES:
      return state;

    case types.REMOVE_GROCERY:
      return [
        ...state.filter(grocery => grocery.id !== action.id)
      ];
      
    default:
      return state;
  }
}