import React, { Component } from "react";
import styled from "styled-components";
import PaginatorPageBar from "./PaginatorPageBar";

const PAGE_SIZE = 20;

const PaginatorMain = styled.div``;

const Page = styled.div``;

class Paginator extends Component {
  constructor(props) {
    super(props);
    this.state = { curPage: 0, pageAmount: 0 };
  }

  componentDidMount() {
    this.setState({
      pageAmount: Math.ceil(this.props.rowElems.length / PAGE_SIZE),
    });
  }

  incrementIndex = (e) => {
    const newPage =
      this.state.curPage + 1 === this.state.pageAmount
        ? this.state.pageAmount - 1
        : this.state.curPage + 1;
    this.setState({ curPage: newPage });
  };

  decrementIndex = (e) => {
    const newPage = this.state.curPage - 1 < 0 ? 0 : this.state.curPage - 1;
    this.setState({ curPage: newPage });
  };

  handleChangePage = (selectedPage) => {
    this.setState({ curPage: selectedPage });
  };

  render() {
    return (
      <PaginatorMain>
        <Page>
          {this.props.rowElems.slice(
            this.state.curPage * PAGE_SIZE,
            this.state.curPage * PAGE_SIZE + PAGE_SIZE
          )}
        </Page>
        <PaginatorPageBar
          pageAmount={this.props.rowElems.length / PAGE_SIZE}
          onChange={this.handleChangePage}
          incrCallback={this.incrementIndex}
          decrCallback={this.decrementIndex}
          curSelectedPage={this.state.curPage}
        />
      </PaginatorMain>
    );
  }
}

export default Paginator;
