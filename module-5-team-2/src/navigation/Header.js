import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/Logo.svg";
// Стили Компонента Header Начало
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
  a:active,a:focus{
    color: #833ae0;
    border-bottom: 1px solid #833ae0;
    margin-bottom: -1px;
  }
  a:hover {
    color: #FFDC40;
    border-bottom: 1px solid #000000;
    margin-bottom: -1px;
  }
`;
// Стили Компонента Header Конец


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
