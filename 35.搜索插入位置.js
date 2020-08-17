/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < target && nums[i + 1] > target) {
        index = i+1;
      }
    }
    return index;
};

