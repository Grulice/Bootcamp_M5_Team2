import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  border: none;
  height: 20px;
  width: 20px;
  margin: 0 3px;
  background-color: white;
  color: ${(props) => (props.selected ? "blueviolet" : "black")};
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};
`;

class PaginatorButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Button
        onClick={() => this.props.handleBtnClick(this.props.buttonNum)}
        selected={this.props.isSelected}
      >
        {this.props.buttonNum + 1}
      </Button>
    );
  }
}

export default PaginatorButton;
