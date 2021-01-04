import doTests from '../../do.test';

const inputs = [
  [
    [
      [0, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [0, 0, 1, 0],
    ],
  ],
  [
    [
      [0, 0, 1, 1],
      [1, 1, 1, 1],
    ],
  ],
];
const results = [9, 4];

const solution = (board) => {
  const memo = [...Array(board.length)].map(() =>
    [...Array(board[0].length)].fill(0),
  );

  let max = 0;

  board.forEach((row, row_idx) => {
    row.forEach((value, col_idx) => {
      if (!value) return;
      memo[row_idx][col_idx] =
        Math.min(
          // 정작 프로그래머스에서는 아직 Optional Chaning을 쓸수 없어서 아래 부분에 변경이 필요하다.
          memo[row_idx - 1]?.[col_idx - 1] || 0,
          memo[row_idx - 1]?.[col_idx] || 0,
          memo[row_idx]?.[col_idx - 1] || 0,
        ) + 1;
      max = Math.max(max, memo[row_idx][col_idx]);
    });
  });

  return max ** 2;
};

doTests(inputs, results, solution);
