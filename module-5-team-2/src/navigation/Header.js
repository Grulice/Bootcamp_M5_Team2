import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/Logo.svg";
import {HeaderBlock} from "./styleNavigation";

class Header extends React.Component {
  render() {
    return (
      <HeaderBlock>
        <ul>
          <NavLink to="/Account"  activeStyle={{
              color: 'blueviolet',
              borderBottom: '1px solid #833ae0',
              marginBottom: '-1px'
          }}>
            <li>Account</li>
          </NavLink>
          <NavLink to="/Stock"  activeStyle={{
              color: 'blueviolet',
              borderBottom: '1px solid #833ae0',
              marginBottom: '-1px'
          }}>
            <li>Stock</li>
          </NavLink>
        </ul>
        <img src={logo} alt="Logo" />
      </HeaderBlock>
    );
  }
}

export default Header;
