/**
 *
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 */

// SOLUTION 1: O(n^2)
// Runtime: 88 ms, faster than 40.22% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 39.7 MB, less than 65.88% of JavaScript online submissions for Longest Common Prefix.
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var prefix = strs[0];
  for (let i = 1; i < strs.length; ++i) {
    const current_word = strs[i];
    if (current_word.charAt(0) !== prefix.charAt(0)) return "";
    for (j = 0; j < current_word.length; ++j) {
      if (current_word.charAt(j) !== prefix.charAt(j)) {
        prefix = current_word.slice(0, j);
        break;
      }
    }
    if (current_word.length < prefix.length) prefix = current_word;
  }

  return prefix;
};
