import { Map } from 'immutable';
import setCommonPropsInImmutableMap from '../utils/setCommonPropsInImmutableMap';

export const INITIAL_STATE = Map({
  circle: Map({
    color: 'blue',
    diameter: 20
  }),
  square: Map({
    color: 'yellow',
    sideLength: 20
  }),
  triangle: Map({
    color: 'red',
    sideLength: 20
  })
});

export const newQualityForSingleShape = (state, payload) => {
  const { quality, shape, value } = payload;

  return state.setIn([shape, quality], value);
}

const allShapesColorSetter = (value) => {
  return setCommonPropsInImmutableMap(shape => shape.set('color', value));
};

const allShapesDimensionSetter = (value) => {
  return setCommonPropsInImmutableMap(shape => {
    if (shape.has('diameter')) {
      return shape.set('diameter', value);
    }

    return shape.set('sideLength', value);
  });
};

export const newQualityForAllShapes = (state, payload) => {
  const { quality, value } = payload;

  if (quality === 'dimension') {
    return allShapesDimensionSetter(value)(state);
  }

  return allShapesColorSetter(value)(state);
}

