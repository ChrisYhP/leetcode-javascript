/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var minDepth = function (root) {
  if (!root) return 0;
  var q = [];
  var depth = 1;
  q.push(root);
  while (q.length > 0) {
    var size = q.length;
    for (var i = 0; i < size; i++) {
      var cur = q.shift()
      if (cur && cur.left == null && cur.right == null) {
        return depth;
      }
      if (cur.left != null) {
        q.push(cur.left)
      }
      if (cur.right != null) {
        q.push(cur.right);
      }
      console.log(q)
    }
    depth++;
  }
};

// @lc code=end

