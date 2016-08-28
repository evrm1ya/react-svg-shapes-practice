import React from 'react';

const ShapeUpdateInputs = React.createClass({
  render: function() {
    return (
      <div className='shape-update-inputs'>
        <div className='input-group'>
          <span className='input-group-addon'>
            Hex Color
          </span>
          <span className='input-group-addon'>
            # 
          </span>
          <input type='text' className='form-control' />
        </div>

        <div className='input-group'>
          <span className='input-group-addon'>
            Dimension
          </span>
          <input type='text' className='form-control' />
          <span className='input-group-addon'>
            Unit 
          </span>
        </div>
      </div>
    );
  }
});

export default ShapeUpdateInputs;