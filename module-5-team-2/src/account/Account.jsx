import React, { Component } from "react";
import styled from "styled-components";

import AccountRowElement from "./AccountRowElement";
import Paginator from "./Paginator";
import * as fetcher from "../fetcher/Fetcher";

const AccountPage = styled.div`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  box-shadow: 0 6px 6px -6px gray;
`;

const TotalSum = styled.h1`
  text-align: center;
`;

const Profit = styled.p`
  text-align: center;
  color: ${(props) => (props.isNegative ? "red" : "green")};
`;

const Body = styled.div`
  padding: 20px 20%;
`;

const DecPartSpan = styled.span`
  font-size: 0.7em;
`;

const accountInfo = [
  {
    id: "1",
    userId: "1",
    code: "AAPL",
    companyName: "Apple",
    amount: "3",
    purchasePrice: "125.00",
    profit: 12,
  },
  {
    id: "2",
    userId: "2",
    code: "NKE",
    companyName: "Nike",
    amount: "1",
    purchasePrice: "737.00",
    profit: 14,
  },
  {
    id: "1",
    userId: "1",
    code: "AAPL",
    companyName: "Apple",
    amount: "3",
    purchasePrice: "125.00",
    profit: 12,
  },
  {
    id: "2",
    userId: "2",
    code: "NKE",
    companyName: "Nike",
    amount: "1",
    purchasePrice: "737.00",
    profit: 14,
  },
  {
    id: "1",
    userId: "1",
    code: "AAPL",
    companyName: "Apple",
    amount: "3",
    purchasePrice: "125.00",
    profit: 12,
  },
  {
    id: "2",
    userId: "2",
    code: "NKE",
    companyName: "Nike",
    amount: "1",
    purchasePrice: "737.00",
    profit: 14,
  },
  {
    id: "1",
    userId: "1",
    code: "AAPL",
    companyName: "Apple",
    amount: "3",
    purchasePrice: "125.00",
    profit: 12,
  },
  {
    id: "2",
    userId: "2",
    code: "NKE",
    companyName: "Nike",
    amount: "1",
    purchasePrice: "737.00",
    profit: 14,
  },
  {
    id: "1",
    userId: "1",
    code: "AAPL",
    companyName: "Apple",
    amount: "3",
    purchasePrice: "125.00",
    profit: 12,
  },
  {
    id: "2",
    userId: "2",
    code: "NKE",
    companyName: "Nike",
    amount: "1",
    purchasePrice: "737.00",
    profit: 14,
  },
  {
    id: "1",
    userId: "1",
    code: "AAPL",
    companyName: "Apple",
    amount: "3",
    purchasePrice: "125.00",
    profit: 12,
  },
  {
    id: "2",
    userId: "2",
    code: "NKE",
    companyName: "Nike",
    amount: "1",
    purchasePrice: "737.00",
    profit: 14,
  },
  {
    id: "1",
    userId: "1",
    code: "AAPL",
    companyName: "Apple",
    amount: "3",
    purchasePrice: "125.00",
    profit: 12,
  },
  {
    id: "2",
    userId: "2",
    code: "NKE",
    companyName: "Nike",
    amount: "1",
    purchasePrice: "737.00",
    profit: 14,
  },
  {
    id: "1",
    userId: "1",
    code: "AAPL",
    companyName: "Apple",
    amount: "3",
    purchasePrice: "125.00",
    profit: 12,
  },
  {
    id: "2",
    userId: "2",
    code: "NKE",
    companyName: "Nike",
    amount: "1",
    purchasePrice: "737.00",
    profit: 14,
  },
  {
    id: "1",
    userId: "1",
    code: "AAPL",
    companyName: "Apple",
    amount: "3",
    purchasePrice: "125.00",
    profit: 12,
  },
  {
    id: "2",
    userId: "2",
    code: "NKE",
    companyName: "Nike",
    amount: "1",
    purchasePrice: "737.00",
    profit: 14,
  },
  {
    id: "1",
    userId: "1",
    code: "AAPL",
    companyName: "Apple",
    amount: "3",
    purchasePrice: "125.00",
    profit: 12,
  },
  {
    id: "2",
    userId: "2",
    code: "NKE",
    companyName: "Nike",
    amount: "1",
    purchasePrice: "737.00",
    profit: 14,
  },
  {
    id: "1",
    userId: "1",
    code: "AAPL",
    companyName: "Apple",
    amount: "3",
    purchasePrice: "125.00",
    profit: 12,
  },
  {
    id: "2",
    userId: "2",
    code: "NKE",
    companyName: "Nike",
    amount: "1",
    purchasePrice: "737.00",
    profit: 14,
  },
  {
    id: "1",
    userId: "1",
    code: "AAPL",
    companyName: "Apple",
    amount: "3",
    purchasePrice: "125.00",
    profit: 12,
  },
  {
    id: "2",
    userId: "2",
    code: "NKE",
    companyName: "Nike",
    amount: "1",
    purchasePrice: "737.00",
    profit: 14,
  },
  {
    id: "1",
    userId: "1",
    code: "AAPL",
    companyName: "Apple",
    amount: "3",
    purchasePrice: "125.00",
    profit: 12,
  },
  {
    id: "2",
    userId: "2",
    code: "NKE",
    companyName: "Nike",
    amount: "1",
    purchasePrice: "737.00",
    profit: 14,
  },
  {
    id: "1",
    userId: "1",
    code: "AAPL",
    companyName: "Apple",
    amount: "3",
    purchasePrice: "125.00",
    profit: 12,
  },
  {
    id: "2",
    userId: "2",
    code: "NKE",
    companyName: "Nike",
    amount: "1",
    purchasePrice: "737.00",
    profit: 14,
  },
  {
    id: "1",
    userId: "1",
    code: "AAPL",
    companyName: "Apple",
    amount: "3",
    purchasePrice: "125.00",
    profit: 12,
  },
  {
    id: "2",
    userId: "2",
    code: "NKE",
    companyName: "Nike",
    amount: "1",
    purchasePrice: "737.00",
    profit: 14,
  },
  {
    id: "1",
    userId: "1",
    code: "AAPL",
    companyName: "Apple",
    amount: "3",
    purchasePrice: "125.00",
    profit: 12,
  },
  {
    id: "2",
    userId: "2",
    code: "NKE",
    companyName: "Nike",
    amount: "1",
    purchasePrice: "737.00",
    profit: 14,
  },
  {
    id: "1",
    userId: "1",
    code: "AAPL",
    companyName: "Apple",
    amount: "3",
    purchasePrice: "125.00",
    profit: 12,
  },
  {
    id: "2",
    userId: "2",
    code: "NKE",
    companyName: "Nike",
    amount: "1",
    purchasePrice: "737.00",
    profit: 14,
  },
  {
    id: "1",
    userId: "1",
    code: "AAPL",
    companyName: "Apple",
    amount: "3",
    purchasePrice: "125.00",
    profit: 12,
  },
  {
    id: "2",
    userId: "2",
    code: "NKE",
    companyName: "Nike",
    amount: "1",
    purchasePrice: "737.00",
    profit: 14,
  },
  {
    id: "1",
    userId: "1",
    code: "AAPL",
    companyName: "Apple",
    amount: "3",
    purchasePrice: "125.00",
    profit: 12,
  },
  {
    id: "2",
    userId: "2",
    code: "NKE",
    companyName: "Nike",
    amount: "1",
    purchasePrice: "737.00",
    profit: 14,
  },
  {
    id: "1",
    userId: "1",
    code: "AAPL",
    companyName: "Apple",
    amount: "3",
    purchasePrice: "125.00",
    profit: 12,
  },
  {
    id: "2",
    userId: "2",
    code: "NKE",
    companyName: "Nike",
    amount: "1",
    purchasePrice: "737.00",
    profit: 14,
  },
  {
    id: "1",
    userId: "1",
    code: "AAPL",
    companyName: "Apple",
    amount: "3",
    purchasePrice: "125.00",
    profit: 12,
  },
  {
    id: "2",
    userId: "2",
    code: "NKE",
    companyName: "Nike",
    amount: "1",
    purchasePrice: "737.00",
    profit: 14,
  },
  {
    id: "1",
    userId: "1",
    code: "AAPL",
    companyName: "Apple",
    amount: "3",
    purchasePrice: "125.00",
    profit: 12,
  },
  {
    id: "2",
    userId: "2",
    code: "NKE",
    companyName: "Nike",
    amount: "1",
    purchasePrice: "737.00",
    profit: 14,
  },
  {
    id: "1",
    userId: "1",
    code: "AAPL",
    companyName: "Apple",
    amount: "3",
    purchasePrice: "125.00",
    profit: 12,
  },
  {
    id: "2",
    userId: "2",
    code: "NKE",
    companyName: "Nike",
    amount: "1",
    purchasePrice: "737.00",
    profit: 14,
  },
  {
    id: "1",
    userId: "1",
    code: "AAPL",
    companyName: "Apple",
    amount: "3",
    purchasePrice: "125.00",
    profit: 12,
  },
  {
    id: "2",
    userId: "2",
    code: "NKE",
    companyName: "Nike",
    amount: "1",
    purchasePrice: "737.00",
    profit: 14,
  },
];

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.accountInfo = [];
  }

  generateRandomUserStocks = () => {
    for (let i = 0; i < 25; i++) {
      const curStockObj = {
        symbol: `${i}TEST`,
        name: `TESTNAME`,
        price: `${(Math.random() * 1000).toFixed(3)}`,
      };
      fetcher.addNewStock(curStockObj, Math.round(Math.random() * 30));
    }
  };

  deleteAllStocks = async () => {
    let curStocks = await fetcher.getUserStocks();
    for (let stock of curStocks) {
      const id = stock.id;
      fetch(
        "https://5e8da89e22d8cd0016a798db.mockapi.io/users/2/stocks/" + id,
        {
          method: "DELETE",
        }
      );
    }
  };

  componentDidMount() {
    fetcher.getUserStocks().then((res) => {
      this.accountInfo = res;
      this.forceUpdate();
    });
  }

  getTotalSum = () =>
    this.accountInfo
      .reduce((acc, currentStock) => {
        console.log(acc, currentStock.totalPrice);
        return acc + currentStock.totalPrice;
      }, 0)
      .toFixed(3);

  splitDecimals = (number) => {
    if (number == 0) return <>&nbsp;</>;
    const [wholePart, decPart] = number.toString().split(".");
    return (
      <>
        {wholePart}.<DecPartSpan>{decPart} $</DecPartSpan>
      </>
    );
  };

  render() {
    const rowelems = this.accountInfo.map((info) => (
      <AccountRowElement {...info} />
    ));
    return (
      <AccountPage>
        <Header>
          <TotalSum>{this.splitDecimals(this.getTotalSum())}</TotalSum>
          <Profit isNegative={this.state.isProfitNegative}>PLACEHOLDER</Profit>
        </Header>
        {/* <button onClick={this.generateRandomUserStocks}>Gen Stocks</button>
        <button onClick={this.deleteAllStocks}>Delete Stocks</button> */}
        <Body>
          <Paginator rowElems={rowelems} />
        </Body>
      </AccountPage>
    );
  }
}

export default Account;
