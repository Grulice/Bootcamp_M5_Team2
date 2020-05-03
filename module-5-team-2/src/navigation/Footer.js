import React from "react";
import { getUserBalance } from "../fetcher/Fetcher";
import {FooterBlock,CurrentBalance} from "./styleNavigation";
import { FooterLoader } from "../commonUI/Spinner-Footer";


class Footer extends React.Component {
  state = {
    balance: null,
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
