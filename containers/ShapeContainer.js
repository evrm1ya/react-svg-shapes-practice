import React, { PropTypes } from 'react';
import Circle from '../components/Circle';
import Square from '../components/Square';
import Triangle from '../components/Triangle';
import InputGroup from '../components/InputGroup';
import InputWrapper from '../components/InputWrapper';

const ShapeContainer = React.createClass({
  handleDiameterChange: function(event) {
    // dummy function
    console.log(event.target.value);
  },

  render: function() {
    return (
      <div className='shape-container'>
        <div className='update-all-shapes'>
          <h2>Update All Shapes</h2>

          <InputWrapper
            dimensionChangeHandler={this.handleDiameterChange}
            dimensionInputName='update-all'
            dimensionInputType='number'
            unit='px'
            colorChangeHandler={this.handleDiameterChange}
            colorInputName='all-shapes-color'
            colorInputType='text'
            />
        </div>

        <div className='shape-box-container'>
          <div className='circle-shape-box'>
            <Circle fill="#ff5600" diameter={100} />

            <InputWrapper
              dimensionChangeHandler={this.handleDiameterChange}
              dimensionInputName='circle-side-length'
              dimensionInputType='number'
              unit='px'
              colorChangeHandler={this.handleDiameterChange}
              colorInputName='circle-color'
              colorInputType='text'
              />
          </div>

          <div className='triangle-shape-box'>
            <Triangle sideLength={20} />

            <InputWrapper
              dimensionChangeHandler={this.handleDiameterChange}
              dimensionInputName='triangle-side-length'
              dimensionInputType='number'
              unit='px'
              colorChangeHandler={this.handleDiameterChange}
              colorInputName='triangle-color'
              colorInputType='text'
              />
          </div>

          <div className='square-shape-box'>
            <Square sideLength={20} fill='#333' />

            <InputWrapper
              dimensionChangeHandler={this.handleDiameterChange}
              dimensionInputName='square-side-length'
              dimensionInputType='number'
              unit='px'
              colorChangeHandler={this.handleDiameterChange}
              colorInputName='square-color'
              colorInputType='text'
              />
          </div>
        </div>
      </div>
    );
  }
});

export default ShapeContainer;
