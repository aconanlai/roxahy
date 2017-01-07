import React, { Component } from 'react';

import Hello from './Components/Hello';
import ContentBoxes from './Components/ContentBoxes/ContentBoxes';
import ContentArea from './Components/ContentArea/ContentArea';
import Nav from './Components/Nav/Nav';
import Lines from './Components/Lines/Lines';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: '',
      selectedContent: '',
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
    this.handleContentSelect = this.handleContentSelect.bind(this);
    this.handleHover = this.handleHover.bind(this);
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
    });
  }

  handleNavResize(navitem, point) {
    const coordsContainer = this.returnCoords(navitem);
    const updateCoords = this.state[coordsContainer];
    updateCoords.right = point;
    let obj = {};
    obj[coordsContainer] = updateCoords;
    this.setState({
      obj,
    });
  }

  handleHover(component) {
    this.setState({
      hovered: component,
    });
  }

  handleContentSelect(component) {
    this.setState({
      selectedContent: component,
    });
  }

  render() {
    return (
      <div>
        <Hello />
        <ContentBoxes
          handleHover={this.handleHover}
          handleBoxResize={this.handleBoxResize}
          handleContentSelect={this.handleContentSelect}
          selectedContent={this.state.selectedContent}
          hovered={this.state.hovered}
        />
        <ContentArea
          selectedContent={this.state.selectedContent}
        />
        <Nav
          handleHover={this.handleHover}
          handleNavResize={this.handleNavResize}
          handleContentSelect={this.handleContentSelect}
          hovered={this.state.hovered}
          selectedContent={this.state.selectedContent}
        />
        <Lines {...this.state} />
      </div>
    );
  }
}

export default App;
