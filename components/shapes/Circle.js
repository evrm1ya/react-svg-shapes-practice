import React, { PropTypes } from 'react';
import SVG from '../svg/svg';

const Circle = (props) => {
  //const { color, diameter } = props.circle;

  return (
    <div className='circle-shape-box'>
      <SVG>
        <circle
          cx='100'
          cy='100'
          fill={'#e0e0e0'}
          r={40}
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
