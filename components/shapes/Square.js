import React, { PropTypes } from 'react';
import SVG from '../svg/svg';
import { topLeftCornerOfCenteredSquare } from '../../utils/square-helpers';

const Square = (props) => {
  const topLeftCorner = topLeftCornerOfCenteredSquare(200, 20);

  return (
    <div className='square-shape-box'>
      <SVG>
        <rect
          height={10}
          width={10}
          fill='green'
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

