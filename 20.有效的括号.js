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
    "{": "}",
    "[": "]",
    "(": ")",
  };
  var arr = s.split("");
  console.log(arr);
  var stack = [];
  for (let i = 0; i < arr.length; i++) {
    var a = arr[i];
    if (map[stack[stack.length - 1]] === a) {
      stack.pop();
    } else {
      stack.push(arr[i]);
    }
  }
  return stack.length === 0;
};
console.log(isValid("()[]{}"));
// @lc code=end
