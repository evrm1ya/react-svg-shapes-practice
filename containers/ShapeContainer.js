import React, { PropTypes } from 'react';
import Circle from '../components/Circle';
import Square from '../components/Square';
import Triangle from '../components/Triangle';
import InputGroup from '../components/InputGroup';

const ShapeContainer = React.createClass({
  handleDiameterChange: function(event) {
    // dummy function
    console.log(event.target.value);
  },

  render: function() {
    return (
      <div className='shape-container'>
        <div className='update-all-dimensions'>
        </div>

        <div className='circle-shape-box'>
          <Circle fill="#ff5600" diameter={100} />

          <div className='input-wrapper'>
            <InputGroup 
              dimension='Diameter'
              handleChange={this.handleDiameterChange}
              inputName='circle-diameter'
              inputType='number'
              unit='px'
              />

            <InputGroup
              dimension='Hex Color'
              handleChange={this.handleDiameterChange}
              inputName='circle-color'
              inputType='text'
              />
          </div>
        </div>

        <div className='triangle-shape-box'>
          <Triangle sideLength={20} />

          <div className='input-wrapper'>
            <InputGroup 
              dimension='Side Length'
              handleChange={this.handleDiameterChange}
              inputName='triangle-side-length'
              inputType='number'
              unit='px'
              />

            <InputGroup 
              dimension='Hex Color'
              handleChange={this.handleDiameterChange}
              inputName='triangle-color'
              inputType='text'
              />
          </div>
        </div>

        <div className='square-shape-box'>
          <Square sideLength={20} fill='#333' />

          <div className='input-wrapper'>
            <InputGroup 
              dimension='Side Length'
              handleChange={this.handleDiameterChange}
              inputName='square-side-length'
              inputType='number'
              unit='px'
              />

            <InputGroup 
              dimension='Hex Color'
              handleChange={this.handleDiameterChange}
              inputName='square-color'
              inputType='text'
              />
          </div>
        </div>
      </div>
    );
  }
});

export default ShapeContainer;
