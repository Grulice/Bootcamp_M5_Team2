import React from "react";
import styled from "styled-components";
import { getUserBalance } from "../fetcher/Fetcher";
import { Loader } from "../commonUI/Spinner";
import { FooterLoader } from "../commonUI/Spinner-Footer";

//Стили Компонента Footer начало
const FooterBlock = styled.div`
  width: 100%;
  background-color: #833ae0;
  position: fixed;
  bottom: 0;
  padding: 15px 0 15px 30px;
  font-family: "Roboto", sans-serif;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.15);
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    p {
      font-size: 22px;
      line-height: 24px;
      letter-spacing: 0.03em;
      color: #ffdc40;
    }
  }
`;
const CurrentBalance = styled.p`
  font-size: 36px;
  margin-right: 47%;
  span {
    font-size: 15px;
  }
`;
//Стили Компонента Footer Конец

class Footer extends React.Component {
  state = {
    balance: null,
    loading: true,
  };
  // Функция выделяющая числа после точки для ее уменьшения в стилях в дальнейшем
  numberAfterDot = (value) => {
    if (value) {
      value = Number(value).toFixed(2);
      value = value + "";
      const digits = value.substring(value.indexOf(".") + 1);
      return "." + digits.substring(0, 2);
    } else return null;
  };
  userBalance = () => {
    getUserBalance().then((balance) => {
      this.setState({ balance: balance.currentBalance });
    });
  };
  componentDidMount() {
    setTimeout(this.userBalance, 1000);
  }

  render() {
    // Запрос и запись state значения баланса пользователя
    // Элемент рисующий баланс пользователя
    const currentBalance = () => {
      const { balance } = this.state;
      if (this.state.balance) {
        return [
          <CurrentBalance key={"balance"}>
            {Math.trunc(balance)}
            <span>{this.numberAfterDot(balance)}$</span>
          </CurrentBalance>,
        ];
      } else return [<FooterLoader key={"lg"}> </FooterLoader>];
    };

    return (
      <FooterBlock>
        <div>
          <p>Balance:</p>
          {currentBalance()}
        </div>
      </FooterBlock>
    );
  }
}
export default Footer;
