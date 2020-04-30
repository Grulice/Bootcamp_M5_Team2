import React, { Component } from "react";
import "./index.css";
import Account from "./account/Account";

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
