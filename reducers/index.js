import { 
  TOGGLE_SHAPE_MENU_VISIBILITY,
  SET_ACTIVE_SHAPE,
  UPDATE_SHAPE, 
  UPDATE_ALL_SHAPES 
} from '../actions';
import {
  INITIAL_STATE,
  newQualityForSingleShape,
  newQualityForAllShapes
} from '../core';

export default function reducer(state = INITIAL_STATE, action = {}) {
  if (!action.type) {
    return state;
  }

  switch (action.type) {
    case TOGGLE_SHAPE_MENU_VISIBILITY:
      return state.set('shapeMenuIsVisible', true);
    case SET_ACTIVE_SHAPE:
      return state.set('activeShape', action.shape);
    case UPDATE_SHAPE:
      return newQualityForSingleShape(state, action.payload);
    case UPDATE_ALL_SHAPES:
      return newQualityForAllShapes(state, action.payload);
  }

  return state;
}

