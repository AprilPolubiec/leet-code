/**
 * Write a function that reverses a string. The input string is given as an array of characters s.
 */

// Runtime: 100 ms, faster than 88.98% of JavaScript online submissions for Reverse String.
// Memory Usage: 46 MB, less than 58.64% of JavaScript online submissions for Reverse String.
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  for (let i = 0; i < Math.floor(s.length / 2); ++i) {
    var swap_index = s.length - 1 - i;
    var swap_char = s[swap_index];
    s[swap_index] = s[i];
    s[i] = swap_char;
  }
  return;
};
