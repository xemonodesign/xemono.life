import React, { Component } from 'react';
import logo from './logo.svg';
import ContentBox from './ContentBox';
import Heading from './Heading';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ContentBox theme='black'>
        <Heading number="01">u-</Heading>
        あああaaaaa</ContentBox>
        <ContentBox theme='white'>いいい</ContentBox>
        <ContentBox theme='gray'>ううう</ContentBox>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
