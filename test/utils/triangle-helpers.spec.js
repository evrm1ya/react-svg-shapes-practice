import { expect } from 'chai';
import {
  calculateTriangleHeight,
  calculateCenteredSvgTrianglePoints
} from '../../utils/triangle-helpers';

describe('calculateTriangleHeight', () => {
  it('returns correctly rounded triangle height', () => {
    expect(calculateTriangleHeight(4, 100)).to.equal(3);
  });

  it('returns correctly rounded triangle height', () => {
    expect(calculateTriangleHeight(20, 100)).to.equal(17);
  });
});

describe('calculateCenteredSvgTrianglePoints', () => {
  it('returns correctly formatted triangle svg points', () => {
    expect(calculateCenteredSvgTrianglePoints(20, 100)).to.equal('100,91.5 90,108.5 110,108.5');
  });
});
