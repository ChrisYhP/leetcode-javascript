/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
      return '';
    }
    if (strs.length === 1) {
      return strs[0];
    }
    let final = '';
    for (let i = 0; i < strs[0].length; i++) {
      let commonStr = strs[0].slice(0, i+1);
      const hasCommonPre = strs.every(e =>e.startsWith(commonStr))
      if (hasCommonPre) {
        final = commonStr;
      }
    }
    return final;
};

