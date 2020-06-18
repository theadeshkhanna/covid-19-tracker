import React, { Component } from 'react';
import classes from './App.css';
import Layout from "./containers/layout/layout";
import { BrowserRouter } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <div className={classes.App}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
