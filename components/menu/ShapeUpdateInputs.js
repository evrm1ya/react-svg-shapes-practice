import React from 'react';

const ShapeUpdateInputs = (props) => {
  const { activeShape, handleColorChange, handleDimensionChange } = props;

  return (
    <div className='shape-update-inputs'>
      <div className='input-group'>
        <span className='input-group-addon'>
          Hex Color
        </span>
        <span className='input-group-addon'>
          # 
        </span>
        <input type='text' 
          className='form-control' 
          onChange={handleColorChange(activeShape)}
          />
      </div>

      <div className='input-group'>
        <span className='input-group-addon'>
          {props.dimensionInputLabel}
        </span>
        <input type='text' 
          className='form-control'
          onChange={handleDimensionChange(activeShape)}
          />
        <span className='input-group-addon'>
          px
        </span>
      </div>
    </div>
  );
};

export default ShapeUpdateInputs;

