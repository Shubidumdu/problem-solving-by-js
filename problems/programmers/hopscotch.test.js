import doTests from '../../do.test';

// 땅따먹기 - 프로그래머스 lv.3
// 내겐 너무 어려운 DP...
// dp[n] => 현재 n열에 도달하면서 얻을 수 있는 최댓값

const inputs = [
  [
    [
      [1, 2, 3, 5],
      [5, 6, 7, 8],
      [4, 3, 2, 1],
    ],
  ],
  [
    [
      [0, 1, 1, 3],
      [2, 2, 3, 9],
      [1, 1, 15, 30],
    ],
  ],
];
const results = [16, 36];

const solution = (land) => {
  let dp = [0, 0, 0, 0];

  land.forEach((row) => {
    let row_temp = [...dp];
    row.forEach((val, idx) => {
      const temp = [...dp];
      temp.splice(idx, 1);
      row_temp[idx] = val + Math.max(...temp);
    });
    dp = row_temp;
  });

  return Math.max(...dp);
};

doTests(inputs, results, solution);
