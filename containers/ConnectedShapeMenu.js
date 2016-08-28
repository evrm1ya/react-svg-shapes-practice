import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
  TOGGLE_SHAPE_DROPDOWN_VISIBILITY,
  setActiveShape
} from '../actions';
import ShapeMenu from '../components/menu/ShapeMenu';

function mapStateToProps(state) {
  return {
    activeShape: state.get('activeShape'),
    shapeDropdownIsVisible: state.get('shapeDropdownIsVisible')
  };
}

function mapDispatchToProps(dispatch) {
  return {
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

