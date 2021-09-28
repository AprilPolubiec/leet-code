/**
 * Merge two sorted linked lists and return it as a sorted list. The list should be made by 
 * splicing together the nodes of the first two lists.
 * 
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
var mergeTwoLists = function (l1, l2) {
  var sortedListHead;

  if (!l1) return l2;
  if (!l2) return l1;

  var l1Node = l1;
  var l2Node = l2;

  if (l1Node.val <= l2Node.val) {
    sortedListHead = l1Node;
    l1Node = l1Node.next;
  } else if (l2Node.val < l1Node.val) {
    sortedListHead = l2Node;
    l2Node = l2Node.next;
  }
  var sortedList = sortedListHead;

  while (l1Node || l2Node) {
    if (!l1Node || (l2Node && l2Node.val < l1Node.val)) {
      sortedList.next = l2Node;
      sortedList = sortedList.next;
      l2Node = l2Node.next;
    } else if (!l2Node || (l1Node && l1Node.val <= l2Node.val)) {
      sortedList.next = l1Node;
      sortedList = sortedList.next;
      l1Node = l1Node.next;
    }
  }

  return sortedListHead;
};
