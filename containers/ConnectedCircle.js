import React from 'react';
import { connect } from 'react-redux';
import Circle from '../components/shapes/Circle';

function mapStateToProps(state) {
  let { color, diameter } = state.getIn(['shapes', 'circle']).toJS();

  return { color, diameter };
}

export default connect(mapStateToProps)(Circle);

