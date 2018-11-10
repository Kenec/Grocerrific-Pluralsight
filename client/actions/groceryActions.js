import toastr from 'toastr';
import swal from 'sweetalert';
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

export const removeGrocerySuccess = (id) => ({
  type: types.REMOVE_GROCERY,
  id
});

export const buyOrDropGrocerySuccess = (grocery) => ({
  type: types.BUY_OR_DROP_GROCERY,
  grocery
});

export const loadGrocery = () => (
  dispatch => dispatch(loadGrocerySuccess(initialState.groceries))
);

export const buyOrDropGrocery = (id) => (
  (dispatch, getState) => {
    const groceries = getState().groceries;
    const grocery = groceries.filter(grocery => grocery.id === id);
    
    const newGrocery = { 
      id: grocery[0].id,
      name: grocery[0].name,
      bought: !grocery[0].bought,
      qty: grocery[0].qty
    }
    dispatch(buyOrDropGrocerySuccess(newGrocery));
  }
);

export const addGrocery = (grocery) => (
  dispatch => { 
    const newGrocery = { id: Math.floor(Math.random()*10 + 6), name: grocery, bought: false, qty: 9 }
    dispatch(addGrocerySuccess(newGrocery)) 
  }
);

export const removeGrocery = (id) => (
  (dispatch, getState) => {
    const message = 'Do you want to remove this Grocery';
    const confirm = confirmAction(message);
    confirm.then((response) => {
      if (response) {
        dispatch(removeGrocerySuccess(id));
      }
    });
  }
);

const confirmAction = (message) => {
  const confirm = swal(message, {
    buttons: { cancel: true, confirm: true }
  });
  
  return confirm;
}