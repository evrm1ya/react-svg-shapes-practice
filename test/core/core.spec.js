import { expect } from 'chai';
import { Map } from 'immutable';
import {
  newQualityForSingleShape,
  newQualityForAllShapes
} from '../../core';

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

describe('core', () => {
  describe('newQualityForSingleShape', () => {
    it("sets a shape's color", () => {
      const newState = newQualityForSingleShape(TEST_STATE, {
        shape: 'triangle',
        quality: 'color',
        value: '#333'
      });

      expect(newState.getIn(['shapes', 'triangle']).toJS()).to.eql({
        color: '#333',
        sideLength: 20
      });
    });

    it("sets a shape's dimension", () => {
      const newState = newQualityForSingleShape(TEST_STATE, {
        shape: 'circle',
        quality: 'diameter',
        value: 80
      });

      expect(newState.getIn(['shapes', 'circle']).toJS()).to.eql({
        color: 'blue',
        diameter: 80
      });
    });
  });

  describe('newQualityForAllShapes', () => {
    it('updates a quality for all shapes', () => {
      const newState = newQualityForAllShapes(TEST_STATE, { 
        quality: 'color', 
        value: 'pink' 
      });

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
  });
});

