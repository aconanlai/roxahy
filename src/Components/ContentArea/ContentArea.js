import React from 'react';

class ContentArea extends React.Component {
  render() {
    const style = (this.props.selectedContent === '') ? { opacity: 0, zIndex: -9 } : { opacity: 1, zIndex: 9 };
    return (
      <div className="contentarea" style={style}>
        eh
      </div>
    );
  }
}

export default ContentArea;
