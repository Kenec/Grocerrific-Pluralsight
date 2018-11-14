/* global expect */
import axios from 'axios';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import * as types from '../../actions/actionTypes';
import * as groceryActions from '../../actions/groceryActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

describe('Grocery Actions:', () => {
  const groceries = [
    { id: 1, name: 'Apple', bought: false },
    { id: 2, name: 'Pear', bought: false }
  ];

  describe('addGrocerySuccess call:', () => {
    it('should create ADD_GROCERY action', () => {
      const grocery = { id: 3, name: 'Mango', bought: false };
      expect(groceryActions.addGrocerySuccess(grocery))
        .toEqual({ type: types.ADD_GROCERY, grocery });
    });
  });

  describe('loadGrocerySuccess call:', () => {
    it('should create LOAD_GROCERIES action', () => {
      
      expect(groceryActions.loadGrocerySuccess(groceries))
        .toEqual({ type: types.LOAD_GROCERIES, groceries });
    });
  });

  describe('buyOrDropGrocerySuccess call:', () => {
    it('should create BUY_OR_DROP_GROCERY action', () => {
      const grocery = { id: 1, name: 'Apple', bought: true };
      expect(groceryActions.buyOrDropGrocerySuccess(grocery))
        .toEqual({ type: types.BUY_OR_DROP_GROCERY, grocery });
    });
  });

  describe('removeGrocerySuccess call:', () => {
    it('should create REMOVE_GROCERY action', () => {
      const grocery = { id: 1, name: 'Apple', bought: false };
      expect(groceryActions.removeGrocerySuccess(grocery.id))
        .toEqual({ type: types.REMOVE_GROCERY, id: grocery.id });
    });
  });

  describe('groceryError call:', () => {
    it('should create GROCCERY_ERROR action', () => {
      const error = 'This is a demo error';
      expect(groceryActions.groceryError(error))
        .toEqual({ type: types.GROCCERY_ERROR, error });
    });
  });

  describe('loadGrocery call:', () => {
    const store = mockStore({});
    mock.onGet(`/api/v1/grocerries`).reply(200, {
      groceries
    });
    it('should get all groceries from the database', () => {
      return store.dispatch(groceryActions.loadGrocery())
        .then(() => {
          expect(store.getActions())
            .toEqual([{
              type: types.LOAD_GROCERIES,
              groceries
            }]);
        });
    });
  });

  describe('buyOrDropGrocery call:', () => {
    const store = mockStore({});
    const id = 1;
    const grocery = { id: 1, name: 'Apple', bought: true };

    mock.onPut(`/api/v1/grocerries/${id}`).reply(200, {
      grocery
    });
    it('should update grocery to BOUGHT in the database', () => {
      return store.dispatch(groceryActions.buyOrDropGrocery(id))
        .then(() => {
          expect(store.getActions())
            .toEqual([{
              type: types.BUY_OR_DROP_GROCERY,
              grocery
            }]);
        });
    });
  });

  describe('addGrocery call:', () => {
    const store = mockStore({});
    let grocery = { id: 3, name: 'Peach', bought: false };
    mock.onPost(`/api/v1/grocerries`, { grocery }).reply(200,
      groceries.push(grocery)
    );

    it('should save new grocery to the database', () => {
      return store.dispatch(groceryActions.addGrocery(grocery))
        .then(() => {
          expect(store.getActions())
            .toEqual([ 
              { type: 'ADD_GROCERY', grocery: 3 }
            ]);
        });
    });
  });

  describe('removeGrocery call:', () => {
    const store = mockStore({});
    const id = 1;
    mock.onDelete(`/api/v1/grocerries/${id}`, {}).reply(200,
      { id: 2, name: 'Pear', bought: false }
    );
    it('should remove grocery from the database', () => {
      const confirm = groceryActions.confirmAction('Test');
      groceryActions.removeGrocery(id)

    });
  });
});