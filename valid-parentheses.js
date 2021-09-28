/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 * An input string is valid if:
 *      Open brackets must be closed by the same type of brackets.
 *      Open brackets must be closed in the correct order.
 */

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  const brackets = { "(": ")", "[": "]", "{": "}" };
  var brackets_stack = [];
  for (let i = 0; i < s.length; ++i) {
    var char = s.charAt(i);
    if (Object.keys(brackets).includes(char)) {
      brackets_stack.push(char);
    } else if (brackets[brackets_stack[brackets_stack.length - 1]] === char) {
      brackets_stack.pop();
    } else {
      return false;
    }
  }
  return brackets_stack.length === 0;
};
