import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/Logo.svg";
import {HeaderBlock} from "./styleNavigation";

class Header extends React.Component {
  render() {
    return (
      <HeaderBlock>
        <ul>
          <Link to="/Account">
            <li>Account</li>
          </Link>
          <Link to="/Stock">
            <li>Stock</li>
          </Link>
        </ul>
        <img src={logo} alt="Logo" />
      </HeaderBlock>
    );
  }
}

export default Header;
