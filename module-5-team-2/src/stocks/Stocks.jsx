
import React, { Component } from "react";
import Search from "./search";
import Rows from "./rows";
import Paginator from "./Paginator";
import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  min-height: calc(100vh - 90px - 90px);
  border-top: 3px solid #e5e5e5;
  margin-top: 90px;
  margin-bottom: 90px;
  display: flex;
  flex-direction: column;
  padding:0 20%;
`;

const div1 = <div> hello </div>;
const div2 = <div> there </div>;

class Stocks extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Search/>
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />
        <Rows divs={[div1, div2]} />

      </Container>
    );
  }
}

export default Stocks;
