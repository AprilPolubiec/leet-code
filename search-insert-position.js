/**
 * Given a sorted array of distinct integers and a target value, return the index if
 * the target is found. If not, return the index where it would be if it were inserted
 * in order.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 */

// SOLUTION 1: NOT o(logn), o(n^2)
// Runtime: 80 ms, faster than 41.05% of JavaScript online submissions for Search Insert Position.
// Memory Usage: 40 MB, less than 22.75% of JavaScript online submissions for Search Insert Position.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let insertIndex = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === target) return i;
    if (nums[i] < target) {
      insertIndex = i + 1;
    } else {
      return insertIndex;
    }
  }
  return insertIndex;
};

// SOLUTION 2: Achieve O(logn) by using a binary search
// Runtime: 68 ms, faster than 92.28% of JavaScript online submissions for Search Insert Position.
// Memory Usage: 39.9 MB, less than 22.75% of JavaScript online submissions for Search Insert Position.
var searchInsert = function (nums, target) {
  let insertIndex = 0;

  let floorIdx = -1;
  let ceilIdx = nums.length;

  while (floorIdx + 1 < ceilIdx) {
    var dist = ceilIdx - floorIdx;
    let middleIndex = Math.floor(floorIdx + dist / 2);
    let middleVal = nums[middleIndex];
    if (middleVal === target) {
      return middleIndex;
    } else if (middleVal > target) {
      ceilIdx = middleIndex;
    } else {
      floorIdx = middleIndex;
      insertIndex = floorIdx + 1;
    }
  }
  return insertIndex;
};
