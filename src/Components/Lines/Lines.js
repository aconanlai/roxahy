import React from 'react';

class Lines extends React.Component {
  render() {
    return (
      <div>
        <div className="line" style={{
          left: this.props.aboutCoords.left,
          top: this.props.aboutCoords.right[1],
          width: (this.props.aboutCoords.right[0] - this.props.aboutCoords.left)
        }}></div>
        <div className="line" style={{
          left: this.props.videosCoords.left,
          top: this.props.videosCoords.right[1],
          width: (this.props.videosCoords.right[0] - this.props.videosCoords.left)
        }}></div>
        <div className="line" style={{
          left: this.props.installCoords.left,
          top: this.props.installCoords.right[1],
          width: (this.props.installCoords.right[0] - this.props.installCoords.left)
        }}></div>
        <div className="line" style={{
          left: this.props.printsCoords.left,
          top: this.props.printsCoords.right[1],
          width: (this.props.printsCoords.right[0] - this.props.printsCoords.left)
        }}></div>
        <div className="line" style={{
          left: this.props.perfCoords.left,
          top: this.props.perfCoords.right[1],
          width: (this.props.perfCoords.right[0] - this.props.perfCoords.left)
        }}></div>
      </div>
    )
  }
}

export default Lines;


// class Lines extends React.Component {
//   render() {
//     const left = this.props.left
//     console.log(left);
//     return (
//       <div>
//       {left.map((line, i) => {
//         return (
//           <div key={i} className="line" style={{
//             left: left[i],
//             top: this.props.right[i][1],
//             width: this.props.right[i][0] - left[i]
//           }}></div>
//         )
//       })}
//       </div>
//     )
//   }
// }