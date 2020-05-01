import React, { Component } from "react";
import PaginatorButton from "./PaginatorButton";
import styled from "styled-components";

const MainBar = styled.div`
  text-align: center;
`;

const IncDecButton = styled.button`
  cursor: pointer;
  border: none;
  height: 20px;
  width: 20px;
  margin: 0 10px;

  background-color: white;

  color: ${(props) => (props.selected ? "blueviolet" : "black")};
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};
`;

class PaginatorPageBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  clickHandler = (btnNum) => {
    this.props.onChange(btnNum);
  };

  getButton = (pageNum) => {
    return (
      <PaginatorButton
        key={pageNum} // for React's internal engine
        isSelected={this.props.curSelectedPage === pageNum ? true : false}
        buttonNum={pageNum}
        handleBtnClick={this.clickHandler}
      />
    );
  };

  getPageNumButtons = () => {
    let btns = [];
    const { pageAmount, curSelectedPage } = this.props;

    const lastPageButton = (
      <React.Fragment key="btnFirstWrapper">
        &nbsp; ... &nbsp;
        {this.getButton(pageAmount)}
      </React.Fragment>
    );

    const firstPageButton = (
      <React.Fragment key="btnLastWrapper">
        {this.getButton(1)}
        ... &nbsp;
      </React.Fragment>
    );

    const distToLastPage = pageAmount - curSelectedPage;
    const distToFirstPage = curSelectedPage - 1;

    const neighborhoodButtons = [];
    if (curSelectedPage - 2 >= 1)
      neighborhoodButtons.push(this.getButton(curSelectedPage - 2));
    if (curSelectedPage - 1 >= 1)
      neighborhoodButtons.push(this.getButton(curSelectedPage - 1));
    neighborhoodButtons.push(this.getButton(curSelectedPage));
    if (curSelectedPage + 1 <= pageAmount)
      neighborhoodButtons.push(this.getButton(curSelectedPage + 1));
    if (curSelectedPage + 2 <= pageAmount)
      neighborhoodButtons.push(this.getButton(curSelectedPage + 2));
    if (distToLastPage > 2) neighborhoodButtons.push(lastPageButton);
    if (distToFirstPage > 2) neighborhoodButtons.unshift(firstPageButton);
    btns.push([...neighborhoodButtons]);

    return btns;
  };

  render() {
    const btns = this.getPageNumButtons();
    return (
      <MainBar>
        <IncDecButton onClick={this.props.decrCallback}>
          &lt;
        </IncDecButton>
        {btns}
        <IncDecButton onClick={this.props.incrCallback}>
          &gt;
        </IncDecButton>
      </MainBar>
    );
  }
}

export default PaginatorPageBar;
