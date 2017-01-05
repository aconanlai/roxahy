import React from 'react';
import ReactDOM from 'react-dom';

class ContentBox extends React.Component {
  constructor(props) {
    super(props);
    this.getRightEdge = this.getRightEdge.bind(this);
  }

  componentDidMount() {
    this.getRightEdge();
    window.addEventListener("resize", this.getRightEdge);
  };

  getRightEdge() {
    const point = ReactDOM.findDOMNode(this.refs.contentbox).getBoundingClientRect().right;
    this.props.handleBoxResize(this.props.contentName, point)
  }

  render() {
    return(
      <div 
        onMouseLeave={() => this.props.handleHover('')} 
        onMouseEnter={() => this.props.handleHover(this.props.contentName)} 
        ref="contentbox" 
        style={{
          left: `${30*this.props.order}px`, 
          bottom: `${30*this.props.order}px`, 
          zIndex: Math.abs(this.props.order - 10),
          background: (this.props.hovered === true) ? 'yellow' : 'blue',
        }} 
        className="contentbox"
      >
        this is the content box
      </div>
    )
  }
}

export default ContentBox;