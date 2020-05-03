import React, { Component } from "react";
import AccountRowElement from "./AccountRowElement";
import Paginator from "../commonUI/Paginator";
import * as fetcher from "../fetcher/Fetcher";
import { Loader } from "../commonUI/Spinner";
import {
  DecPartSpan,
  AccountContainer,
  AccountPage,
  Header,
  TotalSum,
  Profit,
  Body,
} from "./styleAccount";

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountInfo: [],
      stocksInfo: [],
      totalSpent: 0,
      currentTotal: 0,
      sign: 0,
      loading: false,
    };
  }

  componentDidMount() {
    fetcher.getUserStocks().then((res) => {
      let accountInfo = res;
      let codes = res.map((el) => {
        return el.code;
      });
      fetcher.getStockPricesFor(codes).then((stocks) => {
        let stocksInfo = stocks;
        let totalSpent = this.getPurchaseDayTotalSum(accountInfo);
        let currentTotal = this.getCurrentTotalStockPrice(
          stocksInfo,
          accountInfo
        );
        let profit = currentTotal - totalSpent;
        let sign = Math.sign(profit);

        // Only setState if the component is still mounted (fetch may return after the component unmounted)
        this.setState({
          accountInfo: accountInfo,
          stocksInfo: stocksInfo,
          totalSpent: totalSpent,
          currentTotal: currentTotal,
          sign: sign,
          loading: true,
        });
      });
    });
  }

  getPurchaseDayTotalSum = (accountInfo) => {
    return accountInfo
      .reduce((acc, currentStock) => {
        return acc + currentStock.totalPrice;
      }, 0)
      .toFixed(3);
  };

  getCurrentTotalStockPrice = (stocksInfo, accountInfo) => {
    // Calculates the total price for user's stocks if the user sells them all
    // at their current prices.
    const uniqueStocksSums = stocksInfo.map((stock) => {
      const necStock = accountInfo.filter((el) => {
        return el.code === stock.symbol;
      });
      let amount = necStock.reduce((acc, currentStock) => {
        return acc + Number(currentStock.amount);
      }, 0);
      return stock.price * amount;
    });

    const allStocksSum = uniqueStocksSums.reduce((prev, currStock) => {
      return prev + currStock;
    }, 0);

    return allStocksSum.toFixed(3);
  };

  splitDecimals = (number) => {
    if (number === 0) return <>No profit</>;
    const [wholePart, decPart] = number.toString().split(".");
    return (
      <>
        {wholePart}.<DecPartSpan>{decPart} $</DecPartSpan>
      </>
    );
  };

  getProfitAndPercentageComponent = (buyPrice, currPrice) => {
    let profit = currPrice - buyPrice;
    let percent = (profit / buyPrice) * 100;
    if (profit === 0) {
      return <>No profit</>;
    } else {
      let signSymbol = this.getSignSymbol(profit);
      return (
        <>
          {signSymbol}
          {this.splitDecimals(profit.toFixed(2))} ({percent.toFixed(2)}%)
        </>
      );
    }
  };

  getSignSymbol(profit) {
    let signSymbol = "";
    const sign = Math.sign(profit);
    switch (sign) {
      case -1:
        // don't return '-' because the number will already have a minus sign
        signSymbol = "▼ ";
        break;
      case 1:
        signSymbol = "▲ +";
        break;
      default:
    }
    return signSymbol;
  }

  findCurrentPrice(stocksInfo, info) {
    try {
      return (
        stocksInfo.find((el) => el.symbol === info.code).price * info.amount
      );
    } catch (error) {
      // if the company does not exist in Financial API DB - we lose all our investment :)
      console.error(`Company info was not provided by the API: ${error}`);
      return 0;
    }
  }

  render() {
    const { accountInfo, stocksInfo, totalSpent, currentTotal } = this.state;
    const rowElems = accountInfo.map((info, index) => {
      // index is needed for AccountRowElement key
      const curStockPrice = this.findCurrentPrice(stocksInfo, info);
      const curprofit = this.getProfitAndPercentageComponent(
        info.totalPrice,
        curStockPrice
      );
      return (
        <AccountRowElement
          {...info}
          key={index}
          profit={curprofit}
          sign={Math.sign(curStockPrice - info.totalPrice)}
        />
      );
    });

    return (
      <AccountContainer>
        <AccountPage>
          {this.state.loading ? (
            <>
              <Header>
                <TotalSum>{this.splitDecimals(currentTotal)}</TotalSum>
                <Profit sign={this.state.sign}>
                  {this.getProfitAndPercentageComponent(
                    totalSpent,
                    currentTotal
                  )}
                </Profit>
              </Header>
              <Body>
                <Paginator rowElems={rowElems} />
              </Body>
            </>
          ) : (
            <Loader> </Loader>
          )}
        </AccountPage>
      </AccountContainer>
    );
  }
}

export default Account;
