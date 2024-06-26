import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ balance }) => {
  return (
    <header>
      <h1>Bank App</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Deposit</NavLink>
          </li>
          <li>
            <NavLink to="/withdraw">Withdraw</NavLink>
          </li>
        </ul>
      </nav>
      <p>Current Balance: Rs{balance}</p>
    </header>
  );
};

export default Header;
