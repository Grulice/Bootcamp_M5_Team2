import React, { Component } from "react";
import Search from "./Search";
import Rows from "./Rows";
import RowParts from "./RowParts";
import Paginator from "../commonUI/Paginator";
import { Link } from "react-router-dom";
import * as fetcher from "../fetcher/Fetcher";
import { Loader } from "../commonUI/Spinner";
import { StocksContainer, Container } from "./styleStocks";

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
              <RowParts
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
      <StocksContainer>
        <Container>
          <Search value={value} handleChange={this.handleSearch} />
          {rows.length !== 0 ? (
            <Paginator rowElems={rows} />
          ) : value === "" ? (
            <Loader> </Loader>
          ) : (
            <h2>Not Found</h2>
          )}
        </Container>
      </StocksContainer>
    );
  }
}

export default Stocks;
