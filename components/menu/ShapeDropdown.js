import React from 'react';

// could be used elsewhere there are events
const shapeUpdateHandler = (fn) => (shape) => (event) => {
  return fn(shape);
};

const ShapeDropdown = React.createClass({
  handleDropdownVisibility: function() {
    this.props.handleDropdownVisibility();
  },

  handleNewShape: function(shape) {
    let activeShapeHandler = this.props.setActiveShape;
    let dropdownVisibilityHandler = this.props.handleDropdownVisibility;

    return shapeUpdateHandler(() => {
      dropdownVisibilityHandler();
      return activeShapeHandler(shape);
    })(shape);
  },

  render: function() {
    return (
      <div className={this.props.shapeDropdownIsVisible 
          ? 'dropdown open' 
          : 'dropdown'}
        >
        <button className="btn btn-primary dropdown-toggle" 
          type="button"
          onClick={this.handleDropdownVisibility}
          >
          {this.props.activeShape} 
          <span className="caret"></span>
        </button>

        <ul className="dropdown-menu">
          <li>
            <a href="javascript:void(0)" 
              onClick={this.handleNewShape('all')}
              >
              All
            </a>
          </li>

          <li>
            <a href="javascript:void(0)" 
              onClick={this.handleNewShape('circle')}
              >
              Circle
            </a>
          </li>

          <li>
            <a href="javascript:void(0)" 
              onClick={this.handleNewShape('square')}
              >
              Square
            </a>
          </li>

          <li>
            <a href="javascript:void(0)" 
              onClick={this.handleNewShape('triangle')}
              >
              Triangle
            </a>
          </li>
        </ul>
      </div>
    );
  }
});

export default ShapeDropdown;

