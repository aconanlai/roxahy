import React, { Component } from 'react';
import NavLink from './NavLink';

class Nav extends Component {
  render() {
    const links = [
      { name: 'performances', namefr: '', component: 'performances' },
      { name: 'prints & publications', namefr: '', component: 'prints' },
      { name: 'installations', namefr: '', component: 'installations' },
      { name: 'videos', namefr: '', component: 'videos' },
      { name: 'about', namefr: '', component: 'about' },
    ];
    return (
      <div className="nav">
        <ul className="navlist">
          {links.map((link, i) => {
            return (
              <NavLink 
                key={i} 
                component={link.component} 
                name={link.name} 
                handleNavResize={this.props.handleNavResize} 
                handleHover={this.props.handleHover} 
                hovered={this.props.hovered === link.component}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Nav;
