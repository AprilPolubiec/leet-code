/**
 * Given two strings s and t, return true if t is an anagram of s,
 * and false otherwise.
 */

// SOLUTION 1: more efficient, less pretty
// Runtime: 88 ms, faster than 83.19% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 40 MB, less than 91.83% of JavaScript online submissions for Valid Anagram.
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let chars_seen = {};

  for (let i = 0; i < s.length; ++i) {
    var current_char = s.charAt(i);
    if (!chars_seen[current_char]) chars_seen[current_char] = 1;
    else chars_seen[current_char]++;
  }

  for (let i = 0; i < t.length; ++i) {
    var current_char = t.charAt(i);
    if (!chars_seen[current_char]) return false;
    // char in t, not s
    else chars_seen[current_char]--;

    if (chars_seen[current_char] < 0) {
      // more of char in t than s
      return false;
    }
  }

  const freqs = Object.values(chars_seen);
  for (let i = 0; i < freqs.length; ++i) {
    if (freqs[i] !== 0) return false;
  }

  return true;
};


// SOLUTION 2: less efficient, more pretty
// Runtime: 96 ms, faster than 64.79% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 44.7 MB, less than 18.32% of JavaScript online submissions for Valid Anagram.
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  var s_sorted = s.split("").sort().join();
  var t_sorted = t.split("").sort().join();

  return s_sorted === t_sorted;
};
