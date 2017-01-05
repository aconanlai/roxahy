import React from 'react';
import ContentBox from './ContentBox';

class ContentArea extends React.Component {
  render() {
    const content = ['performances', 'prints', 'installations', 'videos', 'about']
    return(
      <div className="contentarea">
      {content.reverse().map((cont, i) => {
        return (
          <ContentBox key={i} handleBoxResize={this.props.handleBoxResize} order={i} contentName={cont}/>
        )
      })}
      </div>
    )
  }
}

export default ContentArea;