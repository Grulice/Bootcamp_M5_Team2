import React, { Component } from "react";
import "./index.css";
import Stocks from "./stocks/Stocks";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Account />
      </div>
    );
  }
}

export default App;
