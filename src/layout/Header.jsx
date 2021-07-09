import React from 'react';
import PropTypes from 'prop-types';
import AppBar from './AppBar';

function Header({children}) {
  return (
    <>
      <header className="header">
        <div className="container">
          <AppBar />
        </div>
      </header>
      {children}
    </>
  )
}

Header.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Header

