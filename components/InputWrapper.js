import React, { PropTypes } from 'react';
import InputGroup from './InputGroup';

const InputWrapper = React.createClass({
  propTypes: {
    colorChangeHandler: PropTypes.func.isRequired,
    colorInputName: PropTypes.string.isRequired,
    colorInputType: PropTypes.string.isRequired,
    dimensionChangeHandler: PropTypes.func.isRequired,
    dimensionInputName: PropTypes.string.isRequired,
    dimensionInputType: PropTypes.string.isRequired,
    unit: PropTypes.string
  },

  render: function() {
    return (
      <div className='input-wrapper'>
        <InputGroup
          dimension='Dimension'
          handleChange={this.props.dimensionChangeHandler}
          inputName={this.props.dimensionInputName}
          inputType={this.props.dimensionInputType}
          unit={this.props.unit}
          />

        <InputGroup
          dimension='Hex Color'
          handleChange={this.props.colorChangeHandler}
          inputName={this.props.colorInputName}
          inputType={this.props.colorInputType}
          />
      </div>
    );
  }
});

export default InputWrapper;
