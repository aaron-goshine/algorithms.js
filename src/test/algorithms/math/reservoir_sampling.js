'use strict';

const math = require('../../..').Math;
const reservoirSampling = math.reservoirSampling;
const assert = require('assert');

describe('Reservoir Sampling', function() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  it('should sample K distinct values from the array', function() {
    const sample = reservoirSampling(array, 5);
    assert.equal(sample.length, 5);
    const seen = {};
    array.forEach(function(value) {
      assert(!seen[value]);
      assert(array.indexOf(value) >= 0);
      seen[value] = true;
    });
  });

  it('should work in corner cases', function() {
    assert.deepEqual(reservoirSampling(array, 0), []);
    assert.deepEqual(reservoirSampling([], 0), []);
    const fullSample = reservoirSampling(array, array.length);
    assert.deepEqual(fullSample.sort(), array);
  });

  it('should raise an error if asked for too many elements', function() {
    assert.throws(function() {
      reservoirSampling(array, array.length + 1);
    });
  });
});
