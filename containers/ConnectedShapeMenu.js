import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
  TOGGLE_SHAPE_DROPDOWN_VISIBILITY,
  setActiveShape,
  updateShape,
  updateAllShapes
} from '../actions';
import ShapeMenu from '../components/menu/ShapeMenu';

function determineDimensionInputLabel(activeShape) {
  switch (activeShape) {
    case 'all':
      return 'Dimension';
    case 'circle': 
      return 'Diameter';
    default:
      return 'Side Length';
  }
}

function mapStateToProps(state) {
  let activeShape = state.get('activeShape');

  return {
    activeShape,
    dimensionInputLabel: determineDimensionInputLabel(activeShape),
    shapeDropdownIsVisible: state.get('shapeDropdownIsVisible')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleDropdownVisibility: () => {
      dispatch({ type: TOGGLE_SHAPE_DROPDOWN_VISIBILITY });
    },
    setActiveShape: bindActionCreators(setActiveShape, dispatch),
    updateAllShapes: bindActionCreators(updateAllShapes, dispatch),
    updateShape: bindActionCreators(updateShape, dispatch)
  };
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ShapeMenu);

