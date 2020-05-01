import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/Logo.svg";

const HeaderBlock = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  padding: 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    width: 30%;
  }
  a {
    text-decoration: none;
    color: #000000;
    font-family: "Roboto", sans-serif;
    padding: 8px;
  }
  a:active,
  a:focus,
  a:hover {
    color: #833ae0;
    border-bottom: 1px solid #833ae0;
    margin-bottom: -1px;
  }
`;
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
