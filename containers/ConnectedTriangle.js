import React from 'react';
import { connect } from 'react-redux';
import Triangle from '../components/shapes/Triangle'

const ConnectedTriangle = React.createClass({
  render: function() {
    return (
      <div className='connected-shape-wrapper'>
        <Triangle
          color={this.props.triangle.color}
          sideLength={this.props.triangle.sideLength}
          />
      </div>
    );
  }
});

function mapStateToProps(state) {
  return { triangle: state.getIn(['shapes', 'triangle']).toJS() };
}

export default connect(mapStateToProps)(ConnectedTriangle);

