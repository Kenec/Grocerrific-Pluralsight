import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import GroceryListItem from './GroceryListItem';

class GroceryListPage extends PureComponent {

  render() {
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Groceries</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <GroceryListItem />
            <GroceryListItem />
            <GroceryListItem />
            <GroceryListItem />
            <GroceryListItem />
          </tbody>
        </table>
      </div>
    );
  }
}

GroceryListPage.propTypes = {

};

export default GroceryListPage;