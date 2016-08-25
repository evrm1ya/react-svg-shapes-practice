import React, { PropTypes } from 'react';
import SVG from '../svg/svg';
import { topLeftCornerOfCenteredSquare } from '../../utils/square-helpers';

const Square = (props) => {
  return (
    <div className='square-shape-box'>
      <SVG>
        <rect
          height={20}
          width={20}
          fill='green'
          x={topLeftCornerOfCenteredSquare(200, 20)}
          y={topLeftCornerOfCenteredSquare(200, 20)}
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

