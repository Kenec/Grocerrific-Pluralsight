import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/header/Header';
import GroceryAddPage from '../components/grocery/GroceryAddPage';
import GroceryListPage from '../components/grocery/GroceryListPage';
import * as groceryActions from '../actions/groceryActions';
import '../styles/main.css';

export class App extends PureComponent {

  buyOrDropGrocery = (id) => {
    this.props.groceryActions.buyOrDropGrocery(id);
  }

  addGrocery = (grocery) => {
    this.props.groceryActions.addGrocery(grocery);
  }

  removeGrocery = (id) => {
    this.props.groceryActions.removeGrocery(id);
  }

  render() {
    const { groceries, bought } = this.props;
    return (
      <div>
      <Header counter={bought.length} />
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <div className="col-8">
              <GroceryAddPage 
                addGrocery={this.addGrocery}
              />
              <GroceryListPage 
                removeGrocery={this.removeGrocery}
                buyOrDropGrocery={this.buyOrDropGrocery}
                groceries={groceries} 
              />
            </div>
            <div className="col-sm"></div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  groceries: PropTypes.array.isRequired,
  bought: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  groceries: state.groceries,
  bought: state.groceries.filter(grocery => grocery.bought === true)
});

const mapDispatchToProps = dispatch => ({
  groceryActions: bindActionCreators(groceryActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);