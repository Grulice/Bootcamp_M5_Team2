import React, { Component } from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  justify-content: space-between;
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

const RowElemTickerDiv = styled.div``;
const RowElemNameDiv = styled.div``;
const RowElemAmountDiv = styled.div``;
const RowElemSumDiv = styled.div``;
const RowElemProfitDiv = styled.div``;

class RowElement extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { code, companyName, amount, purchasePrice, profit } = this.props;
    return (
      <Row>
        {" "}
        <RowElemTickerDiv>{code}</RowElemTickerDiv>
        <RowElemNameDiv>{companyName}</RowElemNameDiv>
        <RowElemAmountDiv>{amount} pcs</RowElemAmountDiv>
        <RowElemSumDiv>{amount * purchasePrice}</RowElemSumDiv>
        <RowElemProfitDiv>
          {(profit > 0 ? "^ " : "v ") + profit}
        </RowElemProfitDiv>
      </Row>
    );
  }
}

export default RowElement;
