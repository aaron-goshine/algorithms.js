'use strict';

const math = require('../../..').Math;
const extEuclid = math.extendedEuclidean;
const assert = require('assert');

describe('extEuclid', function() {
  it('should calculate the solve to Bézout\'s identity', function() {
    let solve = extEuclid(1, 0);
    assert.equal(solve.x, 1);
    assert.equal(solve.y, 0);

    solve = extEuclid(25, 35);
    assert.equal(solve.x, 3);
    assert.equal(solve.y, -2);

    solve = extEuclid(-55, 22);
    assert.equal(solve.x, 1);
    assert.equal(solve.y, 3);
  });
});
