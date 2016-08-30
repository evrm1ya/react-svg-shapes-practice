import React from 'react';

const ShapeUpdateInputs = React.createClass({
  handleColorChange: function(event) {
    let value = event.target.value;

    if (value.length !== 3 && value.length !== 6) {
      return;
    }

    value = '#' + value;

    if (this.props.activeShape === 'all') {
      this.props.updateAllShapes({ quality: 'color', value });
    }

    this.props.updateShape({
      quality: 'color',
      shape: this.props.activeShape,
      value
    });
  },

  handleDimensionChange: function(event) {
    let value = Number(event.target.value);
    
    if (value <= 0 || isNaN(value)) {
      return;
    }

    if (this.props.activeShape === 'all') {
      this.props.updateAllShapes({ quality: 'dimension', value });
    }

    if (this.props.activeShape === 'circle') {
      this.props.updateShape({ quality: 'diameter', shape: 'circle', value });
    }

    this.props.updateShape({ quality: 'sideLength', shape: this.props.activeShape, value });
  },

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
          <input type='text' 
            className='form-control' 
            onChange={this.handleColorChange}
            />
        </div>

        <div className='input-group'>
          <span className='input-group-addon'>
            {this.props.dimensionInputLabel}
          </span>
          <input type='text' 
            className='form-control'
            onChange={this.handleDimensionChange}
            />
          <span className='input-group-addon'>
            px
          </span>
        </div>
      </div>
    );
  }
});

export default ShapeUpdateInputs;

