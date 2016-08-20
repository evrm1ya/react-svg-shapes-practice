import { UPDATE_SHAPE, UPDATE_ALL_SHAPES } from '../actions';
import {
  newQualityForSingleShape,
  newQualityForAllShapes
} from '../core';


function rootReducer(state = {}, action = {}) {
  if (!action.type) {
    return state;
  }

  switch (action.type) {
    case UPDATE_COLOR:
      const { shape, color } = action;
      return Object.assign({}, state);
  }
  return state;
}

export default rootReducer;
