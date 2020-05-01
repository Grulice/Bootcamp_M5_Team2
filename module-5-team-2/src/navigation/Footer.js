import React from "react";
import styled from "styled-components";
import {getUserBalance} from "../fetcher/Fetcher";



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
  flex-basis: 57%;
  span {
    font-size: 18px;
  }
`;
//Стили Компонента Footer Конец



class Footer extends React.Component {
  state ={
    balance:null
  };
  // Функция выделяющая числа после точки для ее уменьшения в стилях в дальнейшем
  numberAfterDot = (value) =>{
    if(value) {
      const digits = value.substring(value.indexOf('.') + 1);
      return digits;
    }
    else return null;
  } ;


  render() {

    // Запрос и запись state значения баланса пользователя
    getUserBalance().then(balance => this.setState({balance:balance.currentBalance.toFixed(2)}));

    // Элемент рисующий баланс пользователя
    const currentBalance =() => {
      if(this.state.balance){
        return [
          <CurrentBalance key={'balance'}>
            {Math.trunc(this.state.balance)}
            <span>.{this.numberAfterDot(this.state.balance)}$</span>
          </CurrentBalance>
        ];}
      else return [<span key={'error'}>Loading....</span>]
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
