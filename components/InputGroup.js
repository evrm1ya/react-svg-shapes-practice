import React, { PropTypes } from 'react';

const InputGroup = React.createClass({
  propTypes: {
    dimension: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    inputName: PropTypes.string.isRequired,
    unit: PropTypes.string
  },

  render: function() {
    return (
      <div className='input-group'>
        <span className='dimension-input input-group-addon'>
          {this.props.dimension}
        </span>

        <input 
          className='form-control'
          type={this.props.inputType}
          name={this.props.inputName}
          onChange={this.props.handleChange}
          />

        {this.props.unit
          ? <span className='input-group-addon'>
              {this.props.unit}
            </span>
          : ''
        }
      </div>
    );
  }
});

export default InputGroup;
