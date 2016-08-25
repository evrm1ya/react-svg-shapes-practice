import React, { PropTypes } from 'react';
import SVG from '../svg/svg';

const Circle = (props) => {
  const { color, diameter } = props;

  return (
    <div className='circle-shape-box'>
      <SVG>
        <circle
          cx='100'
          cy='100'
          fill={color}
          r={diameter / 2}
          />
      </SVG>
    </div>
  );
};

Circle.propTypes = {
  color: PropTypes.string,
  diameter: PropTypes.number
};

export default Circle;

