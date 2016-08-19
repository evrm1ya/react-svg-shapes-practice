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

export const setShapeQuality = (state, payload) => {
  const { quality, shape, value } = payload;

  return state.setIn([shape, quality], value);
}

