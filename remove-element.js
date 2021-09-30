// Runtime: 72 ms, faster than 80.98% of JavaScript online submissions for Remove Element.
// Memory Usage: 38.9 MB, less than 55.12% of JavaScript online submissions for Remove Element.
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  var placement_ptr = 0;
  for (let i = 0; i < nums.length; ++i) {
    let current_val = nums[i];
    if (current_val !== val) {
      let swap = nums[placement_ptr];
      nums[placement_ptr] = current_val;
      nums[i] = swap;
      placement_ptr++;
    }
  }
  nums.splice(placement_ptr);
  return nums.length;
};

// Runtime: 108 ms
// Memory Usage: 43.2 MB

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  var init_length = nums.length;
  for (let i = 0; i < init_length; ++i) {
    let current_val = nums[i];
    if (current_val === val) {
      nums[i] = nums[0];
      nums[0] = current_val;
      nums.shift();
      i--;
    }
  }
  return nums.length;
};
