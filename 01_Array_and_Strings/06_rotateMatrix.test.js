'use strict';

const assert = require('chai').assert;
const rotateMaxtrix = require('./05_rotateMaxtrix').rotateMaxtrix;
const rotateMatrixInPlace = require('./05_rotateMaxtrix').rotateMatrixInPlace;

describe('Array_and_Strings', function() {
  describe('rotateMaxtrix', function() {

    beforeEach(function() {
      let matrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ];

      let rotatedMatrix = [
        [3,6,9],
        [2,5,8],
        [1,4,7]
      ];
    });

    it('should rotate Matrix', function() {
      assert.deepEqual(rotateMaxtrix(matrix), rotatedMatrix);
    });

    it('should rotate Matrix in place', function() {
      rotateMatrixInPlace(matrix);
      assert.deepEqual(matrix, rotatedMatrix);
    });

  });
});
