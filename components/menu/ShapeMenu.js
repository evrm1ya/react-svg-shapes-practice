import React from 'react';
import ShapeDropdown from './ShapeDropdown';
import ShapeUpdateInputs from './ShapeUpdateInputs';

const ShapeMenu = React.createClass({
  render: function() {
    return (
      <div className='shape-menu'>
        <ShapeDropdown {...this.props} />
        <ShapeUpdateInputs />
      </div>
    );
  }
});

export default ShapeMenu;

