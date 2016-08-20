import React from 'react';
import { connect } from 'react-redux';
import Circle from '../components/Circle';
import InputWrapper from '../components/InputWrapper';

const ConnectedCircle = React.createClass({
  render: function() {
    console.log('render ConnectedCircle');
    return (
      <div className='circle-shape-box'>
        <Circle 
          diameter={this.props.circle.diameter} 
          fill={this.props.circle.color}
          />

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
    )
  }
});

function mapStateToProps(state) {
  return { circle: state.get('circle').toJS() }
}

export default connect(mapStateToProps)(ConnectedCircle);
