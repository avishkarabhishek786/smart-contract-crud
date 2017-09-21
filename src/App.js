import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'web3-eth-accounts';
//import _ from 'lodash';
//import {web3,CONTRACT} from './contract';
import AllClientsList from './components/AllClientsList';
import InsertUser from './components/InsertUser';

class App extends Component {

  render() {
    return (
    <div className="container-fluid">
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Smart Contract : Saccha Sauda</h2>
            </div>
            <p className="App-intro">Welcome!</p>
            <div className="container">
                <AllClientsList />
                <InsertUser />
            </div>
        </div>
    </div>
    );
  }
}

export default App;
