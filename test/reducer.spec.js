import { Map } from 'immutable';
import { expect } from 'chai';
import { 
  setActiveShape,
  updateAllShapes, 
  updateShape 
} from '../actions';
import reducer from '../reducers';

const TEST_STATE = Map({
  activeShape: 'all',
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

describe('reducer', () => {
  it('handles setting a new active shape', () => {
    const newState = reducer(TEST_STATE, setActiveShape('triangle'));
    expect(newState.get('activeShape')).to.equal('triangle');
  });

  it('returns a new state with a quality update to a single shape', () => {
    const newState = reducer(TEST_STATE, updateShape({
      quality: 'color',
      shape: 'circle',
      value: 'brown' 
    }));

    expect(newState.getIn(['shapes', 'circle']).toJS()).to.eql({
      color: 'brown',
      diameter: 20
    });
  });

  it('returns a new state with every shape having the same color', () => {
    const newState = reducer(TEST_STATE, updateAllShapes({
      quality: 'color',
      value: 'pink'
    }));

    expect(newState.toJS()).to.eql({
      activeShape: 'all',
      shapes: {
        circle: {
          color: 'pink',
          diameter: 20
        },
        square: {
          color: 'pink',
          sideLength: 20
        },
        triangle: {
          color: 'pink',
          sideLength: 20
        }
      }
    });
  });

  it('returns a new state with every shape having the same dimension', () => {
    const newState = reducer(TEST_STATE, updateAllShapes({
      quality: 'dimension',
      value: 80
    }));

    expect(newState.toJS()).to.eql({
      activeShape: 'all',
      shapes: {
        circle: {
          color: 'blue',
          diameter: 80
        },
        square: {
          color: 'yellow',
          sideLength: 80
        },
        triangle: {
          color: 'red',
          sideLength: 80
        }
      }
    });
  });
});

