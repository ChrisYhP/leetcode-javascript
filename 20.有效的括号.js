/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var map = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  var stack = [];
  for (let a of s) {
    if (!map[a]) {
      stack.push(a);
    } else if(map[a] !== stack.pop()){
      return false
    }
  }
  console.log(stack)
  return stack.length === 0;
};
console.log(isValid("()[]{}"));
// @lc code=end
