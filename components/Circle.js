import React, { PropTypes } from 'react';

const Circle = React.createClass({
  propTypes: {
    fill: PropTypes.string,
    diameter: PropTypes.number
  },

  render: function() {
    return (
      <svg 
        xmlns='http://www.w3.org/2000/svg'
        height='200'
        width='200'
        >
        <circle
          cx='100'
          cy='100'
          fill={this.props.fill}
          r={this.props.diameter / 2}
          />
      </svg>
    );
  }
});

export default Circle;
