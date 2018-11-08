import React from 'react';
import Header from '../components/header/Header';
import GroceryAddPlayer from '../components/grocery/GroceryAddPage';
import GroceryListPage from '../components/grocery/GroceryListPage';
import '../styles/main.css';

const App = () => (
  <div>
    <Header counter={0} />
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col-8">
          <GroceryAddPlayer />
          <GroceryListPage />
        </div>
        <div className="col-sm"></div>
      </div>
    </div>
  </div>
);

export default App;