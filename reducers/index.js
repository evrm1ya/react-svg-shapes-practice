import { UPDATE_COLOR } from '../actions';

function setIn(obj, props = [], value) {
}

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