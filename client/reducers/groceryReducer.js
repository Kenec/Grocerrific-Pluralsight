import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function groceryReducer(state = initialState.groceries, action) {
  switch(action.type) {
    case types.LOAD_GROCERIES:
      return action.groceries;

    case types.REMOVE_GROCERY:
      return [
        ...state.filter(grocery => grocery.id !== action.id)
      ];

    case types.ADD_GROCERY:
      return [...state, Object.assign({}, action.grocery)];

    case types.BUY_OR_DROP_GROCERY:
      return [
        Object.assign({}, action.grocery),
        ...state.filter(grocery => grocery.id !== action.grocery.id)
      ];
      
    default:
      return state;
  }
}