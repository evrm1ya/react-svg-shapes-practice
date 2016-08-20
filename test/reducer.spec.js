import { Map } from 'immutable';
import { expect } from 'chai';
import { updateAllShapes, updateShape } from '../actions';
import { INITIAL_STATE } from '../core';
import reducer from '../reducers';

describe('reducer', () => {
  it('returns a new state with a quality update to a single shape', () => {
    expect(reducer(INITIAL_STATE, updateShape({ 
      shape: 'circle', 
      quality: 'diameter', 
      value: 150 
    })).toJS())
    .to.eql(INITIAL_STATE.setIn(['circle', 'diameter'], 150).toJS());
  });

  it('returns a new state with every shape having the same color', () => {
    const color = 'brown';

    expect(reducer(INITIAL_STATE, updateAllShapes({
      quality: 'color',
      value: 'brown'
    })).toJS())
    .to.eql(Map(INITIAL_STATE.toSeq().map(shape => shape.set('color', color))).toJS());
  });

  it('returns a new state with every shape having the same dimension', () => {
    expect(reducer(INITIAL_STATE, updateAllShapes({
      quality: 'dimension',
      value: 999
    })).toJS())
    .to.eql({
      circle: {
        color: 'blue',
        diameter: 999
      },
      square: {
        color: 'yellow',
        sideLength: 999
      },
      triangle: {
        color: 'red',
        sideLength: 999
      }
    });
  });
});

