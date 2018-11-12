import toastr from 'toastr';
import axios from 'axios';
import swal from 'sweetalert';
import * as types from './actionTypes';

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

export const groceryError = error => ({
  type: types.GROCCERY_ERROR,
  error
});

export const loadGrocery = () => (
  dispatch => axios.get('/api/v1/grocerries')
  .then(res => {
    dispatch(loadGrocerySuccess(res.data.groceries));
  }).catch(error => {
    dispatch(groceryError(error));
  })
);

export const buyOrDropGrocery = (id) => (
  dispatch => axios.put(`/api/v1/grocerries/${id}`, {})
    .then(res => {
      dispatch(buyOrDropGrocerySuccess(res.data.grocery));
      toastr.success('Grocery bought!')
    }).catch(error => {
      dispatch(groceryError(error));
      toastr.error(error);
    })
);

export const addGrocery = (grocery) => (
  dispatch => axios.post('/api/v1/grocerries', { grocery })
    .then(res => {
      dispatch(addGrocerySuccess(res.data));
      toastr.success('Grocery Added!')
    }).catch(error => {
      dispatch(groceryError(error));
      toastr.error(error);
    })
);

export const removeGrocery = (id) => (
  dispatch => {
    const message = 'Do you want to remove this Grocery';
    const confirm = confirmAction(message);
    confirm.then((response) => {
      if (response) {
        axios.delete(`/api/v1/grocerries/${id}`, {})
          .then(res => {
            dispatch(removeGrocerySuccess(id));
          }).catch(error => {
            dispatch(groceryError(error));
            toastr.error(error);
          })
      }
    });
  }
);

const confirmAction = (message) => {
  const confirm = swal(message, {
    buttons: { cancel: true, confirm: true }
  });
  
  return confirm;
};