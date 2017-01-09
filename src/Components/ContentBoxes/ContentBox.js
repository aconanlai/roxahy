import React from 'react';
import ReactDOM from 'react-dom';

class ContentBox extends React.Component {
  constructor(props) {
    super(props);
    this.getRightEdge = this.getRightEdge.bind(this);
  }

  componentDidMount() {
    this.getRightEdge();
    window.addEventListener('resize', this.getRightEdge);
  }

  getRightEdge() {
    const point = ReactDOM.findDOMNode(this.refs.contentbox).getBoundingClientRect().right;
    this.props.handleBoxResize(this.props.contentName, point);
  }

  render() {
    // ContentBoxes passes thumbnail component to ContentBox, renders as this.props.children below
    return (
      <div
        onMouseLeave={() => this.props.handleHover('')}
        onMouseEnter={() => this.props.handleHover(this.props.contentName)}
        onClick={() => this.props.handleContentSelect(this.props.contentName)}
        ref="contentbox"
        style={{
          right: `${30 * this.props.order}px`,
          top: `${30 * this.props.order}px`,
          zIndex: this.props.order,
          boxShadow: (this.props.hovered === true) ? '4px -4px 4px rgba(0, 0, 0, 0.5)' : '2px -2px 2px rgba(0, 0, 0, 0.5)',
        }}
        className="contentbox"
      >{this.props.children}
      </div>
    );
  }
}

export default ContentBox;


// this was in render to conditionally style box based on hover state
// background: (this.props.hovered === true) ? 'yellow' : 'blue',
