/**
 * 
 * Given a string s, determine if it is a palindrome, considering only 
 * alphanumeric characters and ignoring cases.
 * 
 */

// SOLUTION 1
// Runtime: 100 ms, faster than 43.77% of JavaScript online submissions for Valid Palindrome.
// Memory Usage: 49 MB, less than 5.15% of JavaScript online submissions for Valid Palindrome.
const ASCII = {
  a: 97,
  z: 122,
  0: 48,
  9: 57,
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  var string_reversed = "";
  var string_forward = "";

  function isAlphanumeric(char) {
    var char_code = char.charCodeAt(0);
    return (
      (ASCII["a"] <= char_code && ASCII["z"] >= char_code) ||
      (ASCII["0"] <= char_code && ASCII["9"] >= char_code)
    );
  }

  for (let i = 0; i < s.length; ++i) {
    // Add to forward string
    var current_char_lowercase = s.charAt(i).toLowerCase();
    if (isAlphanumeric(current_char_lowercase)) {
      string_forward += current_char_lowercase;
    }

    // Add to backwards string
    var opposite_char_lowercase = s.charAt(s.length - 1 - i).toLowerCase();
    if (isAlphanumeric(opposite_char_lowercase)) {
      string_reversed += opposite_char_lowercase;
    }
  }

  return string_forward === string_reversed;
};
