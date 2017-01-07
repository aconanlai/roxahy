import React from 'react';

class ContentArea extends React.Component {
  render() {
    const style = (this.props.selectedContent === '') ? { height: 0, width: 0, zIndex: -9 } : { height: '80%', width: '70%', zIndex: 99 };
    return (
      <div className="contentarea" style={style}>
        {this.props.selectedContent}
        <div onClick={() => this.props.handleContentSelect('')} className="contentarea--close">x</div>
      </div>
    );
  }
}

export default ContentArea;
