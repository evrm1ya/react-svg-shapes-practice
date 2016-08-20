import { UPDATE_SHAPE, UPDATE_ALL_SHAPES } from '../actions';
import { INITIAL_STATE } from '../core';
import {
  newQualityForSingleShape,
  newQualityForAllShapes
} from '../core';

export default function reducer(state = INITIAL_STATE, action = {}) {
  if (!action.type) {
    return state;
  }

  switch (action.type) {
    case UPDATE_SHAPE:
      return newQualityForSingleShape(state, action.payload);
    case UPDATE_ALL_SHAPES:
      return newQualityForAllShapes(state, action.payload);
  }

  return state;
}

