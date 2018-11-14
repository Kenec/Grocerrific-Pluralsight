/* global expect */
import { createStore } from 'redux';
import rootReducer from '../../reducers/index';

let store = createStore(rootReducer);

describe('root reducer', () => {
  it('should contain groceries reducer', () => {
    expect(store.getState().groceries).toEqual([]);
  });
});