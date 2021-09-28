/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single
 * digit. Add the two numbers and return the sum as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number
 * 0 itself.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var current_node_1 = l1;
  var current_node_2 = l2;
  var current_sum_node = new ListNode();
  var sum_head = current_sum_node;
  var sum = 0;
  var remainder = 0;
  while (current_sum_node) {
    if (current_node_1 && current_node_2) {
      sum = current_node_1.val + current_node_2.val + remainder;
      current_node_1 = current_node_1.next;
      current_node_2 = current_node_2.next;
    } else if (!current_node_1 && current_node_2) {
      sum = current_node_2.val + remainder;
      current_node_2 = current_node_2.next;
    } else if (current_node_1 && !current_node_2) {
      sum = current_node_1.val + remainder;
      current_node_1 = current_node_1.next;
    } else {
      sum = remainder;
    }

    if (sum >= 10) {
      remainder = Math.floor(sum / 10);
      sum = sum % 10;
    } else {
      remainder = 0;
    }
    current_sum_node.val = sum;
    if (current_node_1 || current_node_2 || remainder > 0) {
      current_sum_node.next = new ListNode();
    }
    current_sum_node = current_sum_node.next;
  }
  Math.p
  return sum_head;
};
