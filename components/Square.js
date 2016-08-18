import React, { PropTypes } from 'react';

const Square = React.createClass({
  propTypes: {
    sideLength: PropTypes.number,
    fill: PropTypes.string
  },

  topLeftCorner: function() {
    return 100 - (this.props.sideLength / 2);
  },

  render: function() {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='200'
        width='200'
        >
        <rect
          height={this.props.sideLength}
          width={this.props.sideLength}
          fill={this.props.fill}
          x={this.topLeftCorner()}
          y={this.topLeftCorner()}
          />
      </svg>
    );
  }
});

export default Square;
