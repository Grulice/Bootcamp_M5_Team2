import React, { Component } from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 70px;
  padding: 15px 10px;
  &:hover {
    background-color: rgba(131, 58, 224, 0.05);
  }
`;

class Rows extends Component {
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

export default Rows;
