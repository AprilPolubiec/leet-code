/**
 * Given the head of a sorted linked list, delete all duplicates such that each
 * element appears only once. Return the linked list sorted as well.
 */

//  SOLUTION 1
// Runtime: 192 ms, faster than 5.04% of JavaScript online submissions for Remove Duplicates from Sorted List.
//  Memory Usage: 45.9 MB, less than 5.74% of JavaScript online submissions for Remove Duplicates from Sorted List.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return head;
  var prev_node = head;
  var current_node = prev_node.next;

  while (current_node) {
    if (current_node.val === prev_node.val) {
      current_node = current_node.next;
    } else {
      prev_node.next = current_node;
      prev_node = prev_node.next;
    }
  }
  prev_node.next = null;
  return head;
};

// SOLUTION 2
// Runtime: 84 ms, faster than 79.09% of JavaScript online submissions for Remove Duplicates from Sorted List.
// Memory Usage: 41.1 MB, less than 12.67% of JavaScript online submissions for Remove Duplicates from Sorted List.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return head;
  var current_node = head;

  while (current_node.next) {
    if (current_node.next.val === current_node.val) {
      current_node.next = current_node.next.next;
    } else {
      current_node = current_node.next;
    }
  }
  return head;
};
