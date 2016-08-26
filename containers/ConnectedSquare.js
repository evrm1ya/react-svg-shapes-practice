import React from 'react';
import { connect } from 'react-redux';
import Square from '../components/shapes/Square';

function mapStateToProps(state) {
  let { color, sideLength } = state.getIn(['shapes', 'square']).toJS();

  return { color, sideLength }
}

export default connect(mapStateToProps)(Square);

