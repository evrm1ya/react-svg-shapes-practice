import { expect } from 'chai';
import {
  INITIAL_STATE,
  newQualityForSingleShape,
  newQualityForAllShapes 
} from '../../core';

describe('core', () => {
  describe('newQualityForSingleShape', () => {
    it("sets a shape's color", () => {
      const newState = newQualityForSingleShape(INITIAL_STATE, {
        shape: 'triangle',
        quality: 'color',
        value: '#333'
      });

      expect(newState.get('triangle').toJS()).to.eql({
        color: '#333',
        sideLength: 20
      });
    });

    it("sets a shape's dimension", () => {
      const newState = newQualityForSingleShape(INITIAL_STATE, {
        shape: 'circle',
        quality: 'diameter',
        value: 80
      });

      expect(newState.get('circle').toJS()).to.eql({
        color: 'blue',
        diameter: 80
      });
    });
  });

  describe('newQualityForAllShapes', () => {
    it('updates a quality for all shapes', () => {
      const newState = newQualityForAllShapes(INITIAL_STATE, { quality: 'color', value: 'pink' });

      expect(newState.toJS()).to.eql({
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
      });
    });
  });
});
