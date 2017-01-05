import React, { Component } from 'react';
import update from 'react-addons-update';

import Hello from './Components/Hello';
import ContentArea from './Components/ContentArea/ContentArea';
import Nav from './Components/Nav/Nav';
import Lines from './Components/Lines/Lines';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftX: [0, 0, 0, 0, 0],
      rightXY: [[0,0], [0,0], [0,0], [0,0], [0,0]],
      aboutCoords: {
        left: 0,
        right: [0, 0],
      },
      videosCoords: {
        left: 0,
        right: [0, 0],
      },
      installCoords: {
        left: 0,
        right: [0, 0],
      },
      printsCoords: {
        left: 0,
        right: [0, 0],
      },
      perfCoords: {
        left: 0,
        right: [0, 0],
      },
    };
    this.handleBoxResize = this.handleBoxResize.bind(this);
    this.handleNavResize = this.handleNavResize.bind(this);
    this.returnCoords = this.returnCoords.bind(this);
  }

  returnCoords(navitem) {
    switch(navitem) {
      case 'about':
        return 'aboutCoords';
      case 'videos':
        return 'videosCoords';
      case 'installations':
        return 'installCoords';
      case 'prints':
        return 'printsCoords';
      case 'performances':
        return 'perfCoords';
      default:
        return null;
    }
  }

  handleBoxResize(navitem, point) {
    const coordsContainer = this.returnCoords(navitem);
    const updateCoords = this.state[coordsContainer];
    updateCoords.left = point;
    let obj = {};
    obj[coordsContainer] = updateCoords;
    this.setState({
      obj,
    })
    // this.setState({
    //   leftX: update(this.state.leftX, {order: {$set: point}}),
    // })
  }

  handleNavResize(navitem, point) {
    // const rightXY = this.state.rightXY;
    // rightXY[order] = point;
    // this.setState({
    //   rightXY: rightXY,
    // })
    const coordsContainer = this.returnCoords(navitem);
    const updateCoords = this.state[coordsContainer];
    updateCoords.right = point;
    let obj = {};
    obj[coordsContainer] = updateCoords;
    this.setState({
      obj,
    })
  }

  render() {
    return (
      <div>
        <Hello/>
        <ContentArea handleBoxResize={this.handleBoxResize} />
        <Nav handleNavResize={this.handleNavResize} />
        <Lines {...this.state} />
      </div>
    );
  }
}

export default App;
