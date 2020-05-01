import React, { Component } from "react";
import styled from "styled-components";

const SearchBar = styled.div`
  width: 360px;
  height: 60px;
  border-radius: 94px;
  display: flex;
  margin: 0 auto;
  background: #f3f3f3;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 15px;
`;

const Lens = styled.img`
width: 8%;
margin:  0 auto;
`;

const SearchInput = styled.input`
background: #f3f3f3;
border: none;
height: 40px;
margin: 0 auto;
width: 80%;
font-size: 25px;
outline: none;
`;



class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {value, handleChange}= this.props;
    return (
      <SearchBar>
        <Lens src="./images/lens.svg" alt="Lens icon" />
        <SearchInput type="text" placeholder='enter company ticker' value={value}  onChange={(e)=>{handleChange(e.target.value)}} />
      </SearchBar>
    );
  }
}

export default Search;
