/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  var need = new Map();
  for (let i = 0; i < s1.length; i++) {
    if (!need[s1[i]]) {
      need[s1[i]] = 0;
    }
    need[s1[i]]++
  }
  var left = 0;
  var right = s1.length;
  while (right <= s2.length) {
    var window = new Map();
    var valid = 0;
    var r = s2.slice(left, right);
    right++;
    left++;
    for (let i = 0; i < r.length; i++) {
      var s = r[i]
      if (need[s]) {
        if (!window[s]) {
          window[s] = 0;
        }
        window[s]++
        if (window[s] === need[s]) {
          valid++;
        }
      }
    }
    if (valid === Object.keys(need).length) return true;
  }
  return false;
};

console.log(checkInclusion("ab", "eidboaoo"))
// @lc code=end

