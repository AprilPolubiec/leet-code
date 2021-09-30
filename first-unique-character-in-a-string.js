/**
 * 
 * Given a string s, find the first non-repeating character in it and return its index. 
 * If it does not exist, return -1.
 * 
 */

// Runtime: 100 ms, faster than 89.49% of JavaScript online submissions for First Unique Character in a String.
// Memory Usage: 42.5 MB, less than 41.05% of JavaScript online submissions for First Unique Character in a String.
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  var chars_seen = {};

  for (let i = 0; i < s.length; ++i) {
    let current_char = s.charAt(i);
    if (!chars_seen[current_char]) chars_seen[current_char] = 1;
    else chars_seen[current_char]++;
  }

  for (let i = 0; i < s.length; ++i) {
    if (chars_seen[s.charAt(i)] === 1) return i;
  }
  return -1;
};
