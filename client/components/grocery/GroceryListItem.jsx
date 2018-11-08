import React from 'react';
import PropTypes from 'prop-types';

const GroceryListItem = () => (
  <tr>
    <th scope="row">1</th>
    <td>Rice</td>
    <td></td>
    <td>
      <button type="button" className="mr-2 btn btn-outline-success">Buy</button>
      <button type="button" className="btn btn-outline-danger">Remove item</button>
    </td>
  </tr>
);

GroceryListItem.propTypes = {

};

export default GroceryListItem;

