/**
 * You are given a large integer represented as an integer array digits, where each
 * digits[i] is the ith digit of the integer. The digits are ordered from most
 * significant to least significant in left-to-right order. The large integer does not
 * contain any leading 0's.
 *
 * Increment the large integer by one and return the resulting array of digits.
 */

// SOLUTION 1
// Runtime: 80 ms, faster than 37.64% of JavaScript online submissions for Plus One.
// Memory Usage: 39.1 MB, less than 24.40% of JavaScript online submissions for Plus One.
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  if (digits[digits.length - 1] < 9) {
    digits[digits.length - 1]++;
    return digits;
  }

  for (i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] === 10) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }

  digits.unshift(1);
  return digits;
};

// NON SOLUTION
// "Wrong Answer"
// Breaks on input of [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3] because it exceeds the limit
// for parseInt which makes it parse inprecisely
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  var num = parseInt(digits.join(""));
  num++;
  digits = num.toString().split("");
  return digits;
};
