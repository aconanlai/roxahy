import React from 'react';
import ContentBox from './ContentBox';
import Performances from './Thumbnails/Performances';
import Prints from './Thumbnails/Prints';
import Installations from './Thumbnails/Installations';
import Videos from './Thumbnails/Videos';
import About from './Thumbnails/About';

class ContentBoxes extends React.Component {
  render() {
    const content = [
      { name: 'performances',
        thumbnail: <Performances /> },
      { name: 'prints',
        thumbnail: <Prints /> },
      { name: 'installations',
        thumbnail: <Installations /> },
      { name: 'videos',
        thumbnail: <Videos /> },
      { name: 'about',
        thumbnail: <About /> },
    ];
    return (
      <div className="contentboxholder">
        {content.map((cont, i) => {
          return (
            <ContentBox 
              handleHover={this.props.handleHover} 
              key={i}
              handleBoxResize={this.props.handleBoxResize}
              handleContentSelect={this.props.handleContentSelect}
              order={i}
              contentName={cont.name}
              hovered={this.props.hovered === cont.name}
            >{cont.thumbnail}</ContentBox>
          );
        })}
      </div>
    );
  }
}

export default ContentBoxes;
