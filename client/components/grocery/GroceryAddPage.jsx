import React from 'react';
import PropTypes from 'prop-types';

const GroceryAddPage = () => (
    <div className="mt-3 input-group mb-3">
      <input type="text" className="form-control form-control-lg" placeholder="Grocery Name" aria-label="Grocery" aria-describedby="button-addon2" />
      <div className="input-group-append">
        <button className="btn btn-secondary" type="button" id="button-addon2">
          Add Grocery
        </button>
      </div>
    </div>
);

GroceryAddPage.propTypes = {
  
};

export default GroceryAddPage;

