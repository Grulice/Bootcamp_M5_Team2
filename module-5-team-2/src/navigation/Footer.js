import React from "react";
import { FooterBlock, CurrentBalance } from "./styleNavigation";
import { FooterLoader } from "../commonUI/Spinner-Footer";

class Footer extends React.Component {
  state = {};

  // Функция выделяющая числа после точки для ее уменьшения в стилях в дальнейшем
  numberAfterDot = (value) => {
    if (value) {
      value = Number(value).toFixed(2);
      value = value + "";
      const digits = value.substring(value.indexOf(".") + 1);
      return "." + digits.substring(0, 2);
    } else return null;
  };

  render() {
    // Запрос и запись state значения баланса пользователя
    // Элемент рисующий баланс пользователя
    const currentBalance = () => {
      if (!this.props.loadingBalance) {
        return [
          <CurrentBalance key={"balance"}>
            {Math.trunc(this.props.balanceVal)}
            <span>{this.numberAfterDot(this.props.balanceVal)}$</span>
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
