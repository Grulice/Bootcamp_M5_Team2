import React, { Component } from "react";
import AccountRowElement from "./AccountRowElement";
import Paginator from "./Paginator";
import styled from "styled-components";

const AccountPage = styled.div`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

const TotalSum = styled.h2`
  text-align: center;
`;

const Profit = styled.p`
  text-align: center;
  color: ${(props) => (props.isNegative ? "red" : "green")};
`;

const Body = styled.div`
  padding: 0 20%;
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
  }

  render() {
    const rowelems = accountInfo.map((info) => <AccountRowElement {...info} />);
    return (
      <AccountPage>
        <Header>
          <TotalSum></TotalSum>
          <Profit></Profit>
        </Header>
        <Body>
          <Paginator rowElems={rowelems} />
        </Body>
      </AccountPage>
    );
  }
}

export default Account;
