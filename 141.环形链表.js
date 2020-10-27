/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */

// 1. 使用set保存节点 时间复杂度o(n)
// var hasCycle = function (head) {
//   var a = new Set();
//   var cur = head;
//   while (cur) {
//     if (a.has(cur)) {
//       return true;
//     }
//     a.add(cur);
//     cur = cur.next;
//   }
//   return false;
// };
// 快慢指针
var hasCycle = function (head) {
  var fast = head,
    slow = head;
  while (slow && fast && fast.next) {
    if (fast === slow) {
      return true;
    }
    fast = fast.next.next;
    slow = slow.next;
  }
  return false;
};
// @lc code=end
