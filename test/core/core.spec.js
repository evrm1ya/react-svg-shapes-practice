import { expect } from 'chai';
import {
  INITIAL_STATE,
  setShapeQuality
} from '../../core';

describe('core', () => {
  describe('setShapeQuality', () => {
    it("sets a shape's color", () => {
      const newState = setShapeQuality(INITIAL_STATE, {
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
      const newState = setShapeQuality(INITIAL_STATE, {
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
});
