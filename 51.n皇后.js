/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */

var solveNQueens = function (n) {
  var res = [];
  const board = Array.from({ length: n }, () => Array.from({ length: n }, () => '.'))
  var backTrack = function (board, row) {
    // 满足条件
    if (board.length === row) {
      res.push(board.map(e => e.join("")));
      return;
    }
    for (let col = 0; col < board[row].length; col++) {
      // 不符合跳过
      if (!isValid(board, row, col)) {
        continue;
      }
      board[row][col] = 'Q';
      backTrack(board, row + 1);
      // 回溯
      board[row][col] = '.';
    }
  }

  var isValid = function (board, row, col) {
    if (row === 0) return true;
    for (let i = 0; i < row; i++) {
      // 判断纵向有没有Q  
      if (board[i][col] === 'Q') {
        return false;
      }
      // 判断左上有没有Q
      if (board[i][col - (row - i)] === 'Q') {
        return false;
      }
      // 判断右上有没有Q
      if (board[i][col + (row - i)] === 'Q') {
        return false;
      }
    }
    return true;
  }
  backTrack(board, 0);
  return res;
};

console.log(solveNQueens(5));
// @lc code=end

