import React from 'react';
import Performances from './Content/Performances';
import Prints from './Content/Prints';
import Installations from './Content/Installations';
import Videos from './Content/Videos';
import About from './Content/About';

class ContentArea extends React.Component {

  render() {
    let selected = '';
    switch (this.props.selectedContent) {
      case 'about':
        selected = <About />;
        break;
      case 'videos':
        selected = <Videos />;
        break;
      case 'installations':
        selected = <Installations />;
        break;
      case 'prints':
        selected = <Prints />;
        break;
      case 'performances':
        selected = <Performances />;
        break;
    }
    const containerstyle = (this.props.selectedContent === '') ? { height: '0', width: '0', zIndex: -9 } : { height: '100%', width: '100%', zIndex: 1 };
    const areastyle = (this.props.selectedContent === '') ? { height: '0', width: '0', zIndex: -9 } : { height: '80%', width: '70%', zIndex: 99 };
    return (
      <div style={containerstyle} className="contentarea--container">
        <div onClick={() => this.props.handleContentSelect('')} className="contentarea--modal">
        </div>
        <div className="contentarea" style={areastyle}>
          {selected}
          <div onClick={() => this.props.handleContentSelect('')} className="contentarea--close">x</div>
        </div>
      </div>
    );
  }
}

export default ContentArea;
