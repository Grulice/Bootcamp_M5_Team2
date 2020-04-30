import React, { Component } from "react";
import RowElement from "../commonUI/RowElement";

const accountInfo = [
  {
    id: "1",
    userId: "1",
    code: "AAPL",
    amount: "3",
    purchasePrice: "125.00",
  },
  {
    id: "2",
    userId: "2",
    code: "NKE",
    amount: "1",
    purchasePrice: "737.00",
  },
];

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <RowElement divs={[div1, div2]} />
      </div>
    );
  }
}

export default Account;
