import React, { Component } from "react";
import PaginatorButton from "./PaginatorButton";
import styled from "styled-components";

const MainBar = styled.div`
  text-align: center;
`;

const IncDecButton = styled.button`
  cursor: pointer;
  border: none;
  height: 20px;
  width: 20px;
  margin: 0 10px;

  background-color: white;

  color: ${(props) => (props.selected ? "blueviolet" : "black")};
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};
`;

class PaginatorPageBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  clickHandler = (btnNum) => {
    this.props.onChange(btnNum);
  };

  render() {
    let btns = [];
    for (let i = 0; i < this.props.pageAmount; i++) {
      btns.push(
        <PaginatorButton
          key={i} // for React's internal engine
          isSelected={this.props.curSelectedPage === i ? true : false}
          buttonNum={i}
          handleBtnClick={this.clickHandler}
        />
      );
    }
    return (
      <MainBar>
        <IncDecButton onClick={this.props.decrCallback}>&lt;</IncDecButton>
        {btns}
        <IncDecButton onClick={this.props.incrCallback}>&gt;</IncDecButton>
      </MainBar>
    );
  }
}

export default PaginatorPageBar;
