import React, { Component } from "react";
import "./index.css";
import Header from "./navigation/Header";
import Footer from "./navigation/Footer";
import Account from "./account/Account";
import Stocks from "./stocks/Stocks";
import styled from "styled-components";
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';

const AppBlock = styled.div`
     display: flex;
     align-items: center;
     flex-direction: column;
     position: relative;
     height: 60vh;
     border: 1px solid blueviolet;
     padding: 15px;
`;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
        <AppBlock>
          <Router>
            <Header/>
            <Switch>
              <Route  path='/' exact component={Account}/>
              <Route path='/Stock' component={Stocks}/>
            </Switch>
          </Router>
          <Footer/>
        </AppBlock>
    )

  }
}

export default App;
