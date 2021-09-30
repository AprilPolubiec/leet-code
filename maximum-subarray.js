/**
 * 
 * Given an integer array nums, find the contiguous subarray (containing at least one number) 
 * which has the largest sum and return its sum.
 * 
 * A subarray is a contiguous part of an array.
 * 
 */

// SOLUTION 1: Brute Force
// Time Limit Exceeded
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    var maxSum = nums[0];
    for (let i = 0; i < nums.length; ++i) {
        var current_sum = nums[i];
        for (let j = i + 1; j < nums.length; ++j) {
            current_sum += nums[j];
            if (current_sum > maxSum) { maxSum = current_sum }
        }
    }
    return maxSum;
};