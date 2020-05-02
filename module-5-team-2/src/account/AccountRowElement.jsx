import React, { Component } from "react";
import styled from "styled-components";

const RowContainer = styled.div`
  display: flex;
  align-items: center;

  height: 70px;
  padding: 15px 10px;
  border-bottom: 0.5px dashed lightgrey;
  &:hover {
    background-color: rgba(131, 58, 224, 0.05);
  }
  &:last-child {
    border-bottom: none;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  width: 100%;
`;

const RowElemTickerDiv = styled.div`
  font-family: monospace;
  width: 3%;
  color: grey;
  font-size: x-small;
  vertical-align: baseline;
`;
const RowElemNameDiv = styled.div`
  width: 20%;
`;
const RowElemAmountDiv = styled.div`
  font-family: monospace;
  width: 7%;
  color: grey;
  font-size: x-small;
  vertical-align: baseline;
`;
const RowElemSumDiv = styled.div`
  width: 15%;
  text-align: right;
`;
const RowElemProfitDiv = styled.div`
  width: 20%;
  text-align: left;
  color: ${(props) => (props.isNegative ? "red" : "green")};
`;

const DecPartSpan = styled.span`
  font-size: 0.7em;
`;

class RowElement extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  splitDecimals = (number) => {
    const [wholePart, decPart] = number.toString().split(".");
    return (
      <>
        {wholePart}.<DecPartSpan>{decPart} $</DecPartSpan>
      </>
    );
  };

  render() {
    const { code, name, amount, purchasePrice, profit, sign } = this.props;
    return (
      <RowContainer>
        <Row>
          {" "}
          <RowElemTickerDiv>{code}</RowElemTickerDiv>
          <RowElemNameDiv>{name}</RowElemNameDiv>
          <RowElemAmountDiv>{amount} pcs</RowElemAmountDiv>
          <RowElemSumDiv>
            {this.splitDecimals((amount * purchasePrice).toFixed(3))}
          </RowElemSumDiv>
          <RowElemProfitDiv isNegative={sign < 0 ? true : false}>
            {profit}
          </RowElemProfitDiv>
        </Row>
      </RowContainer>
    );
  }
}

export default RowElement;
