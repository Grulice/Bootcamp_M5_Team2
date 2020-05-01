import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import arrow from "../img/arrow.svg";
import { addNewStock, getStockD } from "../fetcher/Fetcher";

const MainBuy = styled.div`
  width: 100%;
  text-align: center;
`;
const CentralBlock = styled.div`
  padding-bottom: 60px;
  a {
    text-decoration: none;
  }
  a p {
    width: 170px;
    padding: 15px 20px;
    border: 3px solid #833ae0;
    border-radius: 49px;
    margin: 0 auto;
    color: #833ae0;
  }
  a p:hover {
    background-color: blueviolet;
    border: 3px solid #ffffff;
    color: #ffffff;
  }
`;
const HeaderBuy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 56px;
  padding-top: 30px;
  box-shadow: 0 13px 5px -4px rgba(0, 0, 0, 0.15);
  a {
    text-decoration: none;
    color: blueviolet;
    font-size: 18px;
  }
  h2 {
    text-align: center;
    flex-basis: 90%;
    font-size: 28px;
    color: #2fc20a;
  }
  img {
    width: 12px;
  }
`;
const PriceText = styled.p`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 14px;
  padding-top: 56px;
  padding-bottom: 66px;
`;
const BuyFor = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 20px;
  line-height: 14px;
  padding-top: 66px;
  padding-bottom: 47px;
`;
const InputBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 13%;
  margin: 0 auto;
  input {
    width: 100px;
    font-size: 50px;
    color: blueviolet;
    text-align: center;
    border: none;
    outline: none;
  }
  p {
    color: blueviolet;
    cursor: pointer;
  }
`;
class Buy extends React.Component {
  state = {
    name: null,
    price: null,
    symbol: null,
    pieces: 0,
  };

  componentDidMount() {
    const { name, price, symbol } = this.props.location.state;
    if (!this.state.name) {
      this.setState({ name: name, price: price, symbol: symbol });
    }
  }
  handlerPlus = () => {
    this.setState({ pieces: this.state.pieces + 1 });
  };
  handlerMinus = () => {
    this.setState({ pieces: this.state.pieces - 1 });
  };
  sendToUserStock = () => {
    const objectOfData = {
      name: `${this.state.name}`,
      price: `${this.state.price}`,
      symbol: `${this.state.symbol}`,
      pieces: `${this.state.pieces}`,
    };
    return addNewStock(objectOfData);
  };
  changeValue = (e) => {
    this.setState({ pieces: e.target.value });
  };
  render() {
    return (
      <MainBuy>
        <HeaderBuy>
          <Link to={"/Stock"}>
            <img src={arrow} alt="arrow" />
            Back
          </Link>
          <h2>Buy {this.state.name}</h2>
        </HeaderBuy>
        <CentralBlock>
          <PriceText>{this.state.price}$</PriceText>
          <InputBlock>
            <p onClick={this.handlerMinus}>-</p>
            <input
              type="text"
              onChange={this.changeValue}
              value={this.state.pieces}
              onKeyPress={(e) => {
                e.target.style.width = (e.target.value.length + 1) * 30 + "px";
              }}
            />
            <p onClick={this.handlerPlus}>+</p>
          </InputBlock>
          <BuyFor>
            Buy for {(this.state.pieces * this.state.price).toFixed(2)}$
          </BuyFor>
          <Link to={"/Stock"}>
            <p onClick={this.sendToUserStock}>Buy</p>
          </Link>
        </CentralBlock>
      </MainBuy>
    );
  }
}
export default Buy;
