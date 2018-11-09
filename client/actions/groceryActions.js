import * as types from './actionTypes';

// TODO
// Remove this as soon as you connect to the api
// This is just for testing
import initialState from '../reducers/initialState'; 

export const addGrocerySuccess = (grocery) => ({
  type: types.ADD_GROCERY,
  grocery
});

export const loadGrocerySuccess = (groceries) => ({
  type: types.LOAD_GROCERIES,
  groceries
});

export const editGrocerySuccess = (grocery) => ({
  type: types.EDIT_GROCERY,
  grocery
});

export const removeGrocerySuccess = (id) => ({
  type: types.REMOVE_GROCERY,
  id
});

export const loadGrocery = () => (
  dispatch => dispatch(loadGrocerySuccess({}))
);

export const removeGrocery = () => (
  dispatch => {
    dispatch(console.log(initialState))
  }
);