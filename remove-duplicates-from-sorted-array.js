/**
 * 
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place 
 * such that each unique element appears only once. The relative order of the elements should 
 * be kept the same. Since it is impossible to change the length of the array in some languages, 
 * you must instead have the result be placed in the first part of the array nums. More formally, 
 * if there are k elements after removing the duplicates, then the first k elements of nums should 
 * hold the final result. It does not matter what you leave beyond the first k elements.
 * 
 * Return k after placing the final result in the first k slots of nums.
 * 
 * Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 */


//Runtime: 76 ms, faster than 98.05% of JavaScript online submissions for Remove Duplicates from Sorted Array.
//Memory Usage: 41.3 MB, less than 67.32% of JavaScript online submissions for Remove Duplicates from Sorted Array.
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var placement_ptr = 0;
  var final_length = 1;
  for (let i = 0; i < nums.length; ++i) {
    let current_val = nums[i];
    if (current_val !== nums[placement_ptr]) {
      final_length++;
      placement_ptr++;
      nums[placement_ptr] = current_val;
    }
  }
  return final_length;
};
