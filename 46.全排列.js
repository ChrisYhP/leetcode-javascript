/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var res = [];
var permute = function (nums) {
  var track = [];
  backTrack(nums, track);
  return res;
};

function backTrack(nums, track) {
  if (nums.length === track.length) {
    res.push(track);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (track.includes(nums[i])) {
      continue;
    }
    track.push(nums[i]);
    backTrack(nums, [...track]);
    track.pop();
  }
}
// @lc code=end

