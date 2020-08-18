/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  var plus = function (c, pos) {
    var arr = c.split("");
    if (arr[pos] === '9') {
      arr[pos] = '0'
      return arr.join("")
    }
    arr[pos] = (Number(arr[pos]) + 1).toString()
    return arr.join("")
  }
  var minus = function (c, pos) {
    var arr = c.split("");
    if (arr[pos] === '0') {
      arr[pos] = '9'
      return arr.join("")
    }
    arr[pos] = (Number(arr[pos]) - 1).toString()
    return arr.join("")
  }
  var q = [];
  var visited = new Set();
  var deads = new Set(deadends);
  var step = 0;
  q.push('0000');
  visited.add('0000');
  while (q.length > 0) {
    var len = q.length;
    for (let i = 0; i < len; i++) {
      var cur = q.shift();
      if (deads.has(cur)) continue;
      if (cur === target) return step;
      for (let j = 0; j < 4; j++) {
        var plusNode = plus(cur, j);
        var minusNode = minus(cur, j);
        if (!visited.has(plus)) {
          q.push(plusNode);
          visited.add(plusNode)
        }
        if (!visited.has(minus)) {
          q.push(minusNode);
          visited.add(minusNode)
        }
      }
    }
    step++;
  }
  return -1;
};

console.log(openLock(["0201", "0101", "0102", "1212", "2002"], "0202"))

// @lc code=end

