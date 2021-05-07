import doTests from '../../do.test';

const inputs = [
  [1],
  [2],
  [3],
  [4],
  [5],
  [6],
  [7],
  [8],
  [9],
  [10],
  [11],
  [12],
  [13],
  [14],
];
const results = [1, 2, 4, 11, 12, 14, 21, 22, 24, 41, 42, 44, 111, 112];

const solution = (n) => {
  let arrays = [];

  while (true) {
    let quot = parseInt(n / 3);
    let rest = n % 3;
    if (!rest) {
      if (!quot) break;
      arrays.unshift(4);
      n = quot - 1;
    } else {
      arrays.unshift(rest);
      n = quot;
    }
  }

  return parseInt(arrays.join(''));
};

doTests(inputs, results, solution);
