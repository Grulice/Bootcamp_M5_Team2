import React, { Component } from "react";
import Search from "./Search";
import Rows from "./Rows";
import RowDivs from "./RowDivs";
import Paginator from "../commonUI/Paginator";
import { Link } from "react-router-dom";
import * as fetcher from "../fetcher/Fetcher";
import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  min-height: calc(100vh - 90px - 90px);
  -webkit-box-shadow: inset 0px 6px 6px -6px gray;
  -moz-box-shadow: inset 0px 6px 6px -6px gray;
  box-shadow: inset 0px 6px 6px -6px gray;
  margin-top: 20px;
  margin-bottom: 90px;
  display: flex;
  flex-direction: column;
  padding: 0 20%;
  h2 {
    text-align: center;
  }
  a {
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    & > div > div {
      border-bottom: 0.5px dashed lightgrey;
    }
    &:last-child > div > div {
      border-bottom: none;
    }
  }
`;
class Stocks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allStocks: [],
      filteredStocks: [],
      value: "",
    };
  }

  componentDidMount() {
    fetcher.getStockData().then((res) => {
      this.setState({
        allStocks: res.symbolsList,
        filteredStocks: res.symbolsList,
      });
    });
  }

  handleSearch = (value) => {
    const upperValue = value.toUpperCase();
    const searchResult = this.state.allStocks.filter((stock) => {
      return stock.symbol.includes(upperValue);
    });
    this.setState({
      value: value,
      filteredStocks: searchResult,
    });
  };

  render() {
    const { filteredStocks, value } = this.state;
    const rows = filteredStocks.map((symbol, id) => {
      return (
        <Link
          key={id}
          to={{
            pathname: "/Buy",
            state: {
              key: id,
              symbol: symbol.symbol,
              name: symbol.name,
              price: symbol.price,
            },
          }}
        >
          <Rows
            divs={[
              <RowDivs
                key={id}
                div1={symbol.symbol}
                div2={symbol.name}
                div3={symbol.price}
              />,
            ]}
          />
        </Link>
      );
    });

    return (
      <Container>
        <Search value={value} handleChange={this.handleSearch} />

        {rows.length !== 0 ? (
          <Paginator rowElems={rows} />
        ) : value === "" ? (
          <h2> Loading ... </h2>
        ) : (
          <h2>Not Found</h2>
        )}
      </Container>
    );
  }
}

export default Stocks;
