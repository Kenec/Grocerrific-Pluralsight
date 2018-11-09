import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/header/Header';
import GroceryAddPlayer from '../components/grocery/GroceryAddPage';
import GroceryListPage from '../components/grocery/GroceryListPage';
import '../styles/main.css';

export class App extends Component {

  render() {
    const { groceries } = this.props;
    return (
      <div>
      <Header counter={0} />
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <div className="col-8">
              <GroceryAddPlayer />
              <GroceryListPage groceries={groceries} />
            </div>
            <div className="col-sm"></div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {

};

function mapStateToProps(state) {
  return {
    groceries: state.groceries
  };
}

export default connect(mapStateToProps)(App);