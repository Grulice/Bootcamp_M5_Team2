import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import logo from '../img/Logo.svg'

const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:60vw;
    ul{
      display: flex;
      justify-content: space-around;
      list-style: none;
      width: 30%;
    }
    a{
      text-decoration: none;
      color: #000000;
      font-family: 'Roboto', sans-serif;
     padding: 8px;
    }
    a:active,a:focus,a:hover{
      color: #833AE0;
      border-bottom: 1px solid #833AE0;
    }
`;
class Header extends React.Component{
    render() {
        return (
            <HeaderBlock>
                <ul>
                    <Link to='/'>
                        <li>Account</li>
                    </Link>
                    <Link to='/Stock'>
                        <li>Stock</li>
                    </Link>
                </ul>
                <img src={logo} alt="Logo"/>
            </HeaderBlock>
        );
    }

}

export default Header;