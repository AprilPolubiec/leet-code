/**
 * The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
 * 
 * countAndSay(1) = "1"
 * countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then 
 *  converted into a different digit string.
 * To determine how you "say" a digit string, split it into the minimal number of groups so that 
 *  each group is a contiguous section all of the same character. Then for each group, say the number 
 *  of characters, then say the character. To convert the saying into a digit string, replace the counts with a number and concatenate every saying.
 * For example, the saying and conversion for digit string "3322251":
 * 
 * Given a positive integer n, return the nth term of the count-and-say sequence.
 */

//  Runtime: 68 ms, faster than 96.99% of JavaScript online submissions for Count and Say.
//  Memory Usage: 40.4 MB, less than 93.87% of JavaScript online submissions for Count and Say.
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  const say = (n_str) => {
    var current_count = 0;
    var current_digit = "";
    var say_str = "";
    for (let i = 0; i < n_str.length; ++i) {
      var digit = n_str.charAt(i);
      if (digit !== current_digit) {
        if (current_digit) say_str += `${current_count}${current_digit}`;
        current_digit = digit;
        current_count = 0;
      }
      current_count++;
    }
    say_str += `${current_count}${current_digit}`;
    return say_str;
  };

  var final_str = "1";
  if (n === 1) {
    return final_str;
  } else {
    final_str = countAndSay(n - 1);
  }

  return say(final_str);
};
