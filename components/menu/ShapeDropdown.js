import React from 'react';

const ShapeDropdown = React.createClass({
  handleDropdownVisibility: function() {
    this.props.handleDropdownVisibility();
  },

  newActiveShape: function(shape) {
    return function(event) {
      this.props.setActiveShape(shape);
    };
  },

  render: function() {
    console.log('ShapeMenu render');
    return (
      <div className='shape-menu'>
        <div 
          className={this.props.shapeDropdownIsVisible 
            ? 'dropdown open' 
            : 'dropdown'}
          >
          <button className="btn btn-primary dropdown-toggle" 
            type="button"
            onClick={this.handleDropdownVisibility}
            >
            Dropdown
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            <li>
              <a href="#"
                onClick={this.newActiveShape('all').bind(this)}
              >
                All
              </a>
            </li>
            <li>
              <a href="#"
                onClick={this.newActiveShape('circle').bind(this)}
              >
              Circle
              </a>
            </li>
            <li>
              <a href="#">Square</a>
            </li>
            <li>
              <a href="#">Triangle</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

export default ShapeDropdown;

