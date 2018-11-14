/* global expect */
import groceryReducer from '../../reducers/groceryReducer';
import * as types from '../../actions/actionTypes';

const state = [
    { id: 1, name: 'Apple', bought: false },
    { id: 2, name: 'Pear', bought: false }
];

describe('Grocery reducers:', () => {
  describe('LOAD_GROCERIES', () => {
    it('should return all groceries in the store', () => {
      const action = {
        type: types.LOAD_GROCERIES,
        action: state
      };
      expect(groceryReducer(state, action)).toEqual(action.groceries);
    });
  });

  describe('ADD_GROCERY', () => {
    it('should add newly created grocery to the store', () => {
      const action = {
        type: types.ADD_GROCERY,
        grocery: { id: 3, name: 'Orange', bought: false }
      };
      expect(groceryReducer(state, action))
        .toEqual([ 
          { id: 1, name: 'Apple', bought: false },
          { id: 2, name: 'Pear', bought: false }, 
          { id: 3, name: 'Orange', bought: false } ]);
    });
  });

  describe('BUY_OR_DROP_GROCERY', () => {
    it('should update the grocery in the store', () => {
      const action = {
        type: types.BUY_OR_DROP_GROCERY,
        grocery: { id: 1, name: 'Apple', bought: true }
      };
      expect(groceryReducer(state, action))
        .toEqual([ 
          { id: 1, name: 'Apple', bought: true },
          { id: 2, name: 'Pear', bought: false },
        ]);
    });
  });

  describe('REMOVE_GROCERY', () => {
    it('should remove the grocery in the store', () => {
      const action = {
        type: types.REMOVE_GROCERY,
        id: 1
      };
      expect(groceryReducer(state, action)).toEqual([ { id: 2, name: 'Pear', bought: false } ]);
    });
  });

  describe('GROCCERY_ERROR', () => {
    it('should add grocery error to the store', () => {
      const action = {
        type: types.GROCCERY_ERROR,
        error: 'Sample error'
      };
      expect(groceryReducer(state, action)).toEqual('Sample error');
    });
  });

  describe('Author Reducer', () => {
    it('should return state if no action is received', () => {
      const action = {
        type: ''
      };
      expect(groceryReducer(state, action)).toEqual(state);
    });
  });
});
