import { Map } from 'immutable';

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

export const newQualityForAllShapes = (state, payload) => {
  const { quality, value } = payload;

  return Map(state.toKeyedSeq().map(shape => shape.set(quality, value)));
}

