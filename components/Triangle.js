import React, { PropTypes } from 'react';
import { calculateCenteredSvgTrianglePoints } from '../utils/triangle-helpers';

const Triangle = React.createClass({
  propTypes: {
    sideLength: PropTypes.number
  },

  render: function() {
    return (
      <svg xmlns='http://www.w3.org/2000/svg'
        height='200'
        width='200'
        >
        <polygon
          fill='#ff5600'
          points={calculateCenteredSvgTrianglePoints(this.props.sideLength)}
          />
      </svg>
    );
  }
});

export default Triangle;
