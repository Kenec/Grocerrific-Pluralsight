import React from 'react';
import PropTypes from 'prop-types';

const GroceryListItem = ({ grocery }) => (
  <tr>
    <th scope="row">{ grocery.id }</th>
    <td>{ grocery.name }</td>
    <td></td>
    <td>
      <button type="button" className={ grocery.bought ? "mr-2 btn btn-outline-success": "mr-2 btn btn-success" }>
        { grocery.bought ? 'UnBuy': 'Buy' }
      </button>
    </td>
    <td>
      <button type="button" className="btn btn-outline-danger">Remove item</button>
    </td>
  </tr>
);

GroceryListItem.propTypes = {
  grocery: PropTypes.object.isRequired
};

export default GroceryListItem;

