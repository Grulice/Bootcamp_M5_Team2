import React, { Component } from "react";
import styled from "styled-components";

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
`;

const Symbol = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  width: 10%;
  font-family: monospace;
  text-align: center;
`;

const Company = styled.div`
  font-size: 22px;
  color: #000000;
  width: 70%;
  text-align: left;
`;

const Price = styled.div`
  font-size: 30px;
  color: #000000;
  width: 20%;
  text-align: right;
`;

const DecPartSpan = styled.span`
  font-size: 0.7em;
`;

class RowParts extends Component {
  splitDecimals = (number) => {
    const [wholePart, decPart] = number.toString().split(".");
    return (
      <>
        {wholePart}.<DecPartSpan>{decPart}</DecPartSpan> $
      </>
    );
  };

  render() {
    const { div1, div2, div3 } = this.props;
    return (
      <RowContainer>
        <Symbol> {div1} </Symbol>
        <Company> {div2} </Company>
        <Price> {this.splitDecimals(div3)} </Price>
      </RowContainer>
    );
  }
}

export default RowParts;
