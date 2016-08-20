import React, { PropTypes } from 'react';
import { calculateCenteredSvgTrianglePoints } from '../utils/triangle-helpers';

const Triangle = React.createClass({
  propTypes: {
    fill: PropTypes.string.isRequired,
    sideLength: PropTypes.number.isRequired
  },

  render: function() {
    return (
      <svg xmlns='http://www.w3.org/2000/svg'
        height='200'
        width='200'
        >
        <polygon
          fill={this.props.fill}
          points={calculateCenteredSvgTrianglePoints(this.props.sideLength, 100)}
          />
      </svg>
    );
  }
});

export default Triangle;
