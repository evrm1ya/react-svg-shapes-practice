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

const handleColorChange = dispatch => shape => event => {
  let value = event.target.value;

  if (value.length !== 3 && value.length !== 6) {
    return;
  }

  value = '#' + value;

  if (shape === 'all') {
    dispatch(updateAllShapes({ quality: 'color', value }));
  }

  dispatch(updateShape({ quality: 'color', shape, value }));
};

const handleDimensionChange = dispatch => shape => event => {
  let value = Number(event.target.value);

  if (value <= 0 || isNaN(value)) {
    return;
  }

  switch (shape) {
    case 'all':
      return dispatch(updateAllShapes({ quality: 'dimension', value }));
    case 'circle':
      return dispatch(updateShape({ quality: 'diameter', shape, value }));
    default:
      return dispatch(updateShape({ quality: 'sideLength', shape, value }));
  }
};

function mapDispatchToProps(dispatch) {
  return {
    handleColorChange: handleColorChange(dispatch),
    handleDimensionChange: handleDimensionChange(dispatch),
    handleDropdownVisibility: () => {
      dispatch({ type: TOGGLE_SHAPE_DROPDOWN_VISIBILITY });
    },
    setActiveShape: bindActionCreators(setActiveShape, dispatch)
  };
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ShapeMenu);

