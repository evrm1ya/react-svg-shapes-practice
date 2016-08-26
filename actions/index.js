export const TOGGLE_SHAPE_MENU_VISIBILITY = 'TOGGLE_SHAPE_MENU_VISIBILITY';
export const SET_ACTIVE_SHAPE = 'SET_ACTIVE_SHAPE';
export const UPDATE_ALL_SHAPES = 'UPDATE_ALL_SHAPES';
export const UPDATE_SHAPE = 'UPDATE_SHAPE';

export function setActiveShape(shape) {
  return {
    type: SET_ACTIVE_SHAPE,
    shape
  };
}

export function updateAllShapes(payload) {
  return {
    type: UPDATE_ALL_SHAPES,
    payload
  };
}

export function updateShape(payload) {
  return {
    type: UPDATE_SHAPE,
    payload
  };
}

