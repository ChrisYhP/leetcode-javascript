/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (46.11%)
 * Total Accepted:    527.4K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * Merge two sorted linked lists and return it as a new list. The new list
 * should be made by splicing together the nodes of the first two lists.
 * 
 * Example:
 * 
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var l3 = new ListNode(null);
    var c3 = l3;
    while (l1 && l2) {
      if (l1.val < l2.val) {
        c3.next = l1;
        l1 = l1.next;
      } else {
        c3.next = l2;
        l2 = l2.next;
      }
      c3 = c3.next;        
    }
    if (l1 === null) {
      c3.next = l2
    } else {
      c3.next = l1
    }
    return l3.next;
};

