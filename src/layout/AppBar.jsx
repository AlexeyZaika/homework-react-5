import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function AppBar(props) {
  return (
    <nav className="header__menu">
      <ul className="header__list">
        <li>
          <Link to="/home" className="header__link">Home</Link>
        </li>
        <li>
          <Link to="/electronics" className="header__link">Catalog</Link>
        </li>
        <li>
          <Link to="/contacts" className="header__link">Contacts</Link>
        </li>
      </ul>
    </nav>
  )
}

AppBar.propTypes = {

}

export default AppBar

