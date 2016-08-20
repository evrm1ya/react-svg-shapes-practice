export const UPDATE_ALL_SHAPES = 'UPDATE_ALL_SHAPES';
export const UPDATE_SHAPE = 'UPDATE_SHAPE';

export function updateAllShapes(payload) {
  return {
    type: UPDATE_ALL_SHAPES,
    payload
  }
}

export function updateShape(shape, payload) {
  return {
    type: UPDATE_SHAPE,
    payload
  }
}

