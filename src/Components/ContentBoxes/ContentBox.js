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
        onClick={() => this.props.handleContentSelect(this.props.contentName)}
        ref="contentbox" 
        style={{
          right: `${30*this.props.order}px`, 
          top: `${30*this.props.order}px`, 
          zIndex: this.props.order,
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