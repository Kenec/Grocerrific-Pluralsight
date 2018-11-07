import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ counter }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="#">Grocerrific</a>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          
        </ul>
          <div className="cart">
            <span className="counter">{counter}</span>
            <i style={{ "color": "white", fontSize: 24 }} className="fas fa-shopping-cart"></i>
          </div>
      </div>
    </nav>
  );
}

Header.propType = {
  counter: PropTypes.number.isRequired
}

export default Header;