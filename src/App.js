import React, { Component } from 'react';
import classes from './App.css';

class App extends Component {

  handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
      }, onerror => {
        console.log(onerror);
      },{maximumAge:10000, timeout:5000, enableHighAccuracy: true});
    } else {
      console.log("not supported");
    }
  };

  render() {
    return (
      <div className={classes.App}>
          <h1>Hello React</h1>
        <button onClick={this.handleClick}>Click here</button>
      </div>
    );
  }
}

export default App;
