import doTests from '../../do.test';

// 최고의 집합 - 프로그래머스 lv.3

const inputs = [
  [2, 9],
  [2, 1],
  [2, 8],
  [3, 144],
  [7, 8],
  [7, 10],
  [4, 10],
];
const results = [
  [4, 5],
  [-1],
  [4, 4],
  [48, 48, 48],
  [1, 1, 1, 1, 1, 1, 2],
  [1, 1, 1, 1, 2, 2, 2],
  [2, 2, 3, 3],
];

const solution = (n, s) => {
  if (n > s) return [-1];
  // 안 맞아 떨어질 때
  let rest = s % n;
  if (rest) {
    return [
      ...Array(n - rest).fill(Math.floor(s / n)),
      ...Array(rest).fill(Math.floor(s / n) + 1),
    ];
  }
  // 딱 떨어질 때
  return [...Array(n)].fill(s / n);
};

doTests(inputs, results, solution);
