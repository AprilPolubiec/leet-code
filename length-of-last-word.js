/**
 * Given a string s consisting of some words separated by some number of spaces, return 
 * the length of the last word in the string.
 * 
 * A word is a maximal substring consisting of non-space characters only.
 */

// SOLUTION 1: store string
//  Runtime: 76 ms, faster than 55.16% of JavaScript online submissions for Length of Last Word.
//  Memory Usage: 39.1 MB, less than 16.60% of JavaScript online submissions for Length of Last Word.
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let last_word = "";
    for (let i = s.length - 1; i >= 0; i--) {
        if (s.charAt(i) !== " ") { last_word += s.charAt(i) };
        if (s.charAt(i) === " " && last_word.length > 0) break;
    }
    return last_word.length;
};


// SOLUTION 2: use counter
// Runtime: 72 ms, faster than 75.80% of JavaScript online submissions for Length of Last Word.
// Memory Usage: 39 MB, less than 24.89% of JavaScript online submissions for Length of Last Word.
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let last_word_length = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s.charAt(i) !== " ") { last_word_length++ };
        if (s.charAt(i) === " " && last_word_length > 0) break;
    }
    return last_word_length;
};