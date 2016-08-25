import React, { PropTypes } from 'react';
import SVG from '../svg/svg';
import { calculateCenteredSvgTrianglePoints } from '../../utils/triangle-helpers';

const Triangle = (props) => {
  return (
    <div className='triangle-shape-box'>
      <SVG>
        <polygon
          fill={props.color}
          points={calculateCenteredSvgTrianglePoints(props.sideLength, 100)}
          />
      </SVG>
    </div>
  );
};

Triangle.propTypes = {
  fill: PropTypes.string,
  sideLength: PropTypes.number
};

export default Triangle;

