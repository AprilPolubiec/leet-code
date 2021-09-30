/**
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x
 * causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then
 * return 0.
 *
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 */

// SOLUTION 1: use string manip and ignore 64-bit assumption
// Runtime: 88 ms, faster than 76.30% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 40.5 MB, less than 34.66% of JavaScript online submissions for Reverse Integer.
/**
 * @param {number} x
 * @return {number}
 */
const max_int = Math.pow(2, 31) - 1;
const min_int = Math.pow(-2, 31);

var reverse = function (x) {
  var int_array = x.toString().split("");
  var multiplier = 1;
  if (int_array[0] === "-") {
    multiplier = -1;
    int_array.shift();
  }
  for (let i = 0; i < Math.floor(int_array.length / 2); ++i) {
    var current_digit = int_array[i];
    int_array[i] = int_array[int_array.length - 1 - i];
    int_array[int_array.length - 1 - i] = current_digit;
  }

  var reversed_int = parseInt(int_array.join("")) * multiplier;
  reversed_int =
    reversed_int > max_int || reversed_int < min_int ? 0 : reversed_int;

  return reversed_int;
};

// SOLUTION 2: no strings, do not ignore 64-bit assumption
// Runtime: 88 ms, faster than 76.30% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 40.5 MB, less than 50.40% of JavaScript online submissions for Reverse Integer.
/**
 * @param {number} x
 * @return {number}
 */
const max_int = Math.pow(2, 31) - 1;
const min_int = Math.pow(-2, 31);
var reverse = function (x) {
  var isNegative = x < 0;
  if (isNegative) x = Math.abs(x);
  var digits = [];
  while (x > 0) {
    let digit = x % 10;
    digits.unshift(digit);
    x = Math.floor(x / 10);
  }
  var reversed_int = 0;
  for (let i = 0; i < digits.length; ++i) {
    if (i === 9) {
      if (
        (isNegative && reversed_int > 147483648) ||
        (!isNegative && reversed_int > 147483647)
      ) {
        return 0;
      }
    }
    if (i === 10) return 0;
    reversed_int += digits[i] * Math.pow(10, i);
  }

  if (isNegative) reversed_int *= -1;

  return reversed_int;
};
