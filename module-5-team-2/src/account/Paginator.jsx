import React, { Component } from "react";

const PaginatorMain = styled.div``;

const Page = styled.div``;

class Paginator extends Component {
  constructor(props) {
    super(props);
    this.state = { curPage: 0 };
  }
  render() {
    return (
      <PaginatorMain>
        <Page>{}</Page>
        <PaginatorPageBar />
      </PaginatorMain>
    );
  }
}

export default Paginator;
