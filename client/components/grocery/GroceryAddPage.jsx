import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class GroceryAddPage extends PureComponent {

  groceryName = React.createRef();

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addGrocery(this.groceryName.current.value);
    event.currentTarget.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mt-3 input-group mb-3">
          <input type="text" ref={this.groceryName} className="form-control form-control-lg" placeholder="Grocery Name" aria-label="Grocery" aria-describedby="button-addon2" required/>
          <div className="input-group-append">
            <button className="btn btn-secondary" type="submit" id="button-addon2">
              Add Grocery
            </button>
          </div>
        </div>
      </form>
    );
  }
}

GroceryAddPage.propTypes = {
  addGrocery: PropTypes.func.isRequired
};

export default GroceryAddPage;

