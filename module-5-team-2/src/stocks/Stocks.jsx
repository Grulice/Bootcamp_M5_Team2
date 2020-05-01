import React, { Component } from "react";
import Search from "./Search";
import Rows from "./Rows";
import RowDivs from "./RowDivs";
import Paginator from "../commonUI/Paginator";
import * as fetcher from "../fetcher/Fetcher";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.main`
  width: 100%;
  min-height: calc(100vh - 90px - 90px);
  border-top: 3px solid #e5e5e5;
  margin-top: 20px;
  margin-bottom: 90px;
  display: flex;
  flex-direction: column;
  padding: 0 20%;
`;

class Stocks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allStocks: [],
      value: "",
    };
  }

  componentDidMount() {
    fetcher.getStockData().then((res) => {
      this.setState({
        allStocks: res.symbolsList,
      });
    });
  }

  handleSearch = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    const { allStocks, value } = this.state;
    const rows = allStocks.map((symbol) => {
      return (
        <Link >
          <Rows
            divs={[
              <RowDivs
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
        <Paginator rowElems={rows} rowsNum={rows.length} />
      </Container>
    );
  }
}

export default Stocks;
