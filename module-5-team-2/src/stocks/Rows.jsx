import React, { Component } from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 15px 10px;
  &:hover {
    background-color: #F9F5FD;
    box-shadow:#e9e9e9 0 20px 20px 0;
    transform:translateY(-10px);
    cursor:pointer;
  }
  &:active{
   box-shadow:#e9e9e9 0 5px 5px 0;
    transform: translateY(0);
  }
`;

class RowElement extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const divsToRender = this.props.divs;
    return (
    
    <Row>
      {divsToRender}

    </Row>
    
    );
  }
}

export default RowElement;
