import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Circle from '../components/Circle';
import Square from '../components/Square';
import Triangle from '../components/Triangle';
import InputWrapper from '../components/InputWrapper';
import ConnectedCircle from './ConnectedCircle';

const App = React.createClass({
  handleDiameterChange: function(event) {
    // dummy function
    console.log(event.target.value);
  },

  render: function() {
    console.log('render');
    return (
      <div className='app'>
        <h1>Shapes</h1>

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
            <ConnectedCircle />

            <div className='triangle-shape-box'>
              <Triangle 
                //sideLength={this.props.triangle.sideLength} 
                sideLength={200}
                fill={this.props.triangle.color}
                />

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
              <Square 
                sideLength={this.props.square.sideLength} 
                fill={this.props.square.color} 
                />

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
      </div>
    );
  }
});

function shapeStateToJS(state, shape) {
  return state.get(shape).toJS();
}

function mapStateToProps(state) {
  return {
    square: shapeStateToJS(state, 'square'),
    triangle: shapeStateToJS(state, 'triangle')
  }
}

export default connect(mapStateToProps)(App);
