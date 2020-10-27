/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  var cur = head,
    prev = null,
  for (let i = 0; i < m; i++) {
    cur = cur.next
  }
  prev = cur
  for (let j = m; j < n; j++) {
    var next = cur.next
    cur.next = prev
    prev = cur
    cur.next = next
  }
  prev.next = cur
  return prev  
};
// @lc code=end
