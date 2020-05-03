import React, { Component } from "react";
import { DecPartSpan, RowContainer, Symbol, Company, Price } from "./styleRowParts";

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
