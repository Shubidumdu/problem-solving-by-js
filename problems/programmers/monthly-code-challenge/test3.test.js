import doTests from '../../../do.test';

const inputs = [
  [
    [-5, 0, 2, 1, 2],
    [
      [0, 1],
      [3, 4],
      [2, 3],
      [0, 3],
    ],
  ],
  [
    [0, 1, 0],
    [
      [0, 1],
      [1, 2],
    ],
  ],
];
const results = [9, -1];

const solution = (a, edges) => {
  const totalSum = a.reduce((prev, val, idx) => prev + val, 0);
  if (totalSum !== 0) return -1;

  return;
};

doTests(inputs, results, solution);
