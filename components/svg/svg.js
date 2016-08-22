import React from 'react';

const SVG = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='200'
      width='200'
      >
      {props.children}
    </svg>
  );
};

export default SVG;

