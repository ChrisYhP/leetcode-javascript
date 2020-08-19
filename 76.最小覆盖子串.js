/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  var need = new Map();
  var window = new Map();
  for (let i of t) {
    if (need[i] == null) {
      need[i] = 0
    }
    need[i]++
  }
  var left = 0;
  var right = 0;
  var valid = 0;
  var start = 0;
  var len = Infinity;
  while (right < s.length) {
    var c = s[right];
    right++;
    if (need[c]) {
      if (window[c] == null) {
        window[c] = 0
      }
      window[c]++;
      if (window[c] === need[c]) {
        valid++;
      }
    }
    while (valid === Object.keys(need).length) {
      if (right - left < len) {
        start = left;
        len = right - left;
      }
      var l = s[left];
      left++;
      if (need[l]) {
        if (window[l] === need[l]) {
          valid--;
        }
        window[l]--;
      }
    }
  }
  return len == Infinity ? "" : s.substring(start, start + len)
};

console.log(minWindow('ADOBECODEBANC', 'ABC'))
// @lc code=end

