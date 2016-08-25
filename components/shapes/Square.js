import React, { PropTypes } from 'react';
import SVG from '../svg/svg';
import { topLeftCornerOfCenteredSquare } from '../../utils/square-helpers';

const Square = (props) => {
  console.log('render square');
  const topLeftCorner = topLeftCornerOfCenteredSquare(200, props.sideLength);

  return (
    <div className='square-shape-box'>
      <SVG>
        <rect
          height={props.sideLength}
          width={props.sideLength}
          fill={props.color}
          x={topLeftCorner}
          y={topLeftCorner}
          />
      </SVG>
    </div>
  );
};

Square.propTypes = {
  fill: PropTypes.string,
  sideLength: PropTypes.number
};

export default Square;

