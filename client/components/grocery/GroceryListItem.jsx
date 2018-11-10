import React from 'react';
import PropTypes from 'prop-types';

const GroceryListItem = ({ grocery, index, removeGrocery, buyOrDropGrocery }) => (
  <tr>
    <th scope="row">{ index + 1 }</th>
    <td>{ grocery.name }</td>
    <td></td>
    <td>
      <button onClick={() => buyOrDropGrocery(grocery.id)} type="button" className={ grocery.bought ? "mr-2 btn btn-outline-success": "mr-2 btn btn-success" }>
        { grocery.bought ? 'Drop': 'Buy' }
      </button>
    </td>
    <td>
      <button onClick={() => removeGrocery(grocery.id)} type="button" className="btn btn-outline-danger">
        Remove item
      </button>
    </td>
  </tr>
);

GroceryListItem.propTypes = {
  grocery: PropTypes.object.isRequired,
  removeGrocery: PropTypes.func.isRequired
};

export default GroceryListItem;

