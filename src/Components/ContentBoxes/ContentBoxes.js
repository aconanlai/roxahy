import React from 'react';
import ContentBox from './ContentBox';

class ContentBoxes extends React.Component {
  render() {
    const content = ['performances', 'prints', 'installations', 'videos', 'about'];
    return(
      <div className="contentboxholder">
      {content.map((cont, i) => {
        return (
          <ContentBox 
            handleHover={this.props.handleHover} 
            key={i} 
            handleBoxResize={this.props.handleBoxResize}
            handleContentSelect={this.props.handleContentSelect}
            order={i} 
            contentName={cont}
            hovered={this.props.hovered === cont}
          />  
        )
      })}
      </div>
    )
  }
}

export default ContentBoxes;