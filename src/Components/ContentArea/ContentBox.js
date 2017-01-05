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
      <div ref="contentbox" style={{left: `${30*this.props.order}px`, bottom: `${30*this.props.order}px`, zIndex: Math.abs(this.props.order - 10) }} className="contentbox">
        this is the content box
      </div>
    )
  }
}

export default ContentBox;