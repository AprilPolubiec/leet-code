/**
 * Implement strStr().
 *
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 *
 * Clarification:
 * What should we return when needle is an empty string? This is a great question to ask during an interview.
 * For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's
 * strstr() and Java's indexOf().
 */

//  Runtime: 80 ms, faster than 71.52% of JavaScript online submissions for Implement strStr().
//  Memory Usage: 41.1 MB, less than 11.77% of JavaScript online submissions for Implement strStr().
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === "") return 0;
  const needle_length = needle.length;

  for (let i = 0; i < haystack.length; ++i) {
    if (haystack.charAt(i) === needle.charAt(0)) {
      let current_word = haystack.substring(i, i + needle_length);
      if (current_word === needle) return i;
    }
  }

  return -1;
};

// SOLUTION 2:
// Runtime: 76 ms, faster than 81.12% of JavaScript online submissions for Implement strStr().
// Memory Usage: 40.3 MB, less than 53.19% of JavaScript online submissions for Implement strStr().
var strStr = function (haystack, needle) {
  if (!needle || haystack === needle) return 0;
  var needle_length = needle.length;

  for (let i = 0; i <= haystack.length - needle_length; ++i) {
    if (haystack.substring(i, i + needle_length) === needle) return i;
  }

  return -1;
};
