import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class NavLink extends Component {
  constructor(props) {
    super(props);
    this.getLeftEdge = this.getLeftEdge.bind(this);
  }

  componentDidMount() {
    this.getLeftEdge();
    window.addEventListener("resize", this.getLeftEdge);
    
  };

  getLeftEdge() {
    const bounds = ReactDOM.findDOMNode(this.refs.navlink).getBoundingClientRect();
    const x = bounds.left;
    const y = (bounds.top + bounds.bottom) / 2;
    const point = [x, y];
    this.props.handleNavResize(this.props.component, point)
  }

  render() {
    return (
       <li>
        <span ref="navlink" className="navlink">{this.props.name}</span>
      </li>
    );
  }
}

export default NavLink;