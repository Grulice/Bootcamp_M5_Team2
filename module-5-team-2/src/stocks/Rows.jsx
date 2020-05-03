import React, { Component } from "react";
import { Row } from "./styleRows";

class Rows extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const divsToRender = this.props.divs;
    return <Row>{divsToRender}</Row>;
  }
}

export default Rows;
