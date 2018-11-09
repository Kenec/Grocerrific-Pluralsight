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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.groceries.map( grocery => <GroceryListItem key={"id: "+ grocery.id} grocery={grocery}/> )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

GroceryListPage.propTypes = {
  groceries: PropTypes.array.isRequired
};

export default GroceryListPage;