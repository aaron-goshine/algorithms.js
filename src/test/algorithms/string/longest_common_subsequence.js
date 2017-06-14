'use strict';

const directory = '../../../algorithms/string/';
const filename = 'longest_common_subsequence';
const longestCommonSubsequence = require(directory + filename);
const assert = require('assert');

describe('Longest common subsequence', function() {
  it('should return the longest common subsequence of ' +
    'two strings', function() {
    assert.equal('', longestCommonSubsequence('', ''));
    assert.equal('', longestCommonSubsequence('', 'aaa'));
    assert.equal('', longestCommonSubsequence('aaa', ''));
    assert.equal('aaa', longestCommonSubsequence('aaa', 'aaa'));
    assert.equal('mjau', longestCommonSubsequence('xmjyauz', 'mzjawxu'));
    assert.equal('hman', longestCommonSubsequence('human', 'chimpanzee'));
  });
});
