import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import GroceryListItem from './GroceryListItem';

class GroceryListPage extends PureComponent {

  render() {
    const { removeGrocery, buyOrDropGrocery } = this.props;
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
              this.props.groceries.map( (grocery, index) => 
                  <GroceryListItem 
                    key={"id: "+ index}
                    index={index}
                    buyOrDropGrocery={buyOrDropGrocery} 
                    removeGrocery={removeGrocery} 
                    grocery={grocery}/> 
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

GroceryListPage.propTypes = {
  groceries: PropTypes.array.isRequired,
  removeGrocery: PropTypes.func.isRequired
};

export default GroceryListPage;