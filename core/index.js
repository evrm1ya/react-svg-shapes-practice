import { Map } from 'immutable';
import setCommonPropsInImmutableMap from '../utils/setCommonPropsInImmutableMap';

export const INITIAL_STATE = Map({
  activeShape: 'all',
  shapeDropdownIsVisible: false,
  shapes: Map({
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
  })
});

export function newQualityForSingleShape(state, payload) {
  const { quality, shape, value } = payload;

  return state.setIn(['shapes', shape, quality], value);
}

function allShapesColorSetter(value) {
  return setCommonPropsInImmutableMap(shape => shape.set('color', value));
}

function allShapesDimensionSetter(value) {
  return setCommonPropsInImmutableMap(shape => {
    if (shape.has('diameter')) {
      return shape.set('diameter', value);
    }

    return shape.set('sideLength', value);
  });
}

export function newQualityForAllShapes(state, payload) {
  const { quality, value } = payload;
  const shapes = Map(state.get('shapes'));

  if (quality === 'dimension') {
    return state.set('shapes', allShapesDimensionSetter(value)(shapes));
  }

  return state.set('shapes', allShapesColorSetter(value)(shapes));
}

