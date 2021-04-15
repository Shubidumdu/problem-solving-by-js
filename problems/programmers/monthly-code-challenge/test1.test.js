import doTests from '../../../do.test';

const inputs = [
  [
    [4, 7, 12],
    [true, false, true],
  ],
  [
    [1, 2, 3],
    [false, false, true],
  ],
];
const results = [9, 0];

const solution = (absolutes, signs) => {
  const answer = absolutes.reduce((prev, num, idx) => {
    const sign = signs[idx];
    if (sign) return prev + num;
    else return prev - num;
  }, 0);

  return answer;
};

doTests(inputs, results, solution);
