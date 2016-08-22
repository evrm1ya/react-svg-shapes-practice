import { expect } from 'chai';
import { topLeftCornerOfCenteredSquare } from '../../utils/square-helpers';

describe('topLeftCorner', () => {
  it('returns the difference of the width of the svg element and ' +
     'the width of the sideLength of the square divided by 2', () => {
    expect(topLeftCornerOfCenteredSquare(200, 20)).to.equal(90);
  });
});
