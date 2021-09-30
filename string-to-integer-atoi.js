/**
 *  Implement the myAtoi(string s) function, which converts a string to a 32-bit 
 * signed integer (similar to C/C++'s atoi function).
 *  The algorithm for myAtoi(string s) is as follows:
 * 
 * Read in and ignore any leading whitespace.
 * Check if the next character (if not already at the end of the string) is '-' 
 * or '+'. Read this character in if it is either. This determines if the final 
 * result is negative or positive respectively. Assume the result is positive if 
 * neither is present.
 * 
 * Read in next the characters until the next non-digit charcter or the end of 
 * the input is reached. The rest of the string is ignored.
 * 
 * Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If 
 * no digits were read, then the integer is 0. Change the sign as necessary 
 * (from step 2).
 * 
 * If the integer is out of the 32-bit signed integer range [-231, 231 - 1], 
 * then clamp the integer so that it remains in the range. Specifically, 
 * integers less than -231 should be clamped to -231, and integers greater than 
 * 231 - 1 should be clamped to 231 - 1.
 * 
 * Return the integer as the final result.
 * 
 * Note:
 * Only the space character ' ' is considered a whitespace character.
 * Do not ignore any characters other than the leading whitespace or the rest of
 * the string after the digits.
 * */



// Runtime: 84 ms, faster than 93.88% of JavaScript online submissions for String to Integer (atoi).
// Memory Usage: 40.8 MB, less than 54.14% of JavaScript online submissions for String to Integer (atoi).
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const MIN_INT = Math.pow(-2, 31);
  const MAX_INT = Math.pow(2, 31) - 1;
  var integer = 0;
  var digits = [];
  var start_index = 0;

  for (let i = start_index; i < s.length; ++i) {
    if (s.charAt(i) !== " ") {
      start_index = i;
      break;
    }
  }

  var multiplier = 1;
  if (s.charAt(start_index) === "-") {
    multiplier = -1;
    start_index++;
  } else if (s.charAt(start_index) === "+") {
    start_index++;
  }

  for (let i = start_index; i < s.length; ++i) {
    var current_char_code = s.charCodeAt(i);
    if (48 <= current_char_code && 57 >= current_char_code) {
      digits.push(s.charAt(i));
    } else {
      break;
    }
  }

  for (let i = 0; i < digits.length; ++i) {
    var place = digits.length - 1 - i;
    var place_multiplier = Math.pow(10, place);
    integer += digits[i] * place_multiplier;
  }

  integer *= multiplier;
  integer =
    integer < 0 ? Math.max(integer, MIN_INT) : Math.min(integer, MAX_INT);

  return integer;
};
