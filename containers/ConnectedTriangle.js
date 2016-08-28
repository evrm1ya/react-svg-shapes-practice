import React from 'react';
import { connect } from 'react-redux';
import Triangle from '../components/shapes/Triangle'

function mapStateToProps(state) {
  let { color, sideLength } = state.getIn(['shapes', 'triangle']).toJS();

  return { color, sideLength };
}

export default connect(mapStateToProps)(Triangle);

