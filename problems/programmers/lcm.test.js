import doTests from '../../do.test';

// N개의 최소공배수 - 프로그래머스 lv.2

const inputs = [[[2, 6, 8, 14]], [[1, 2, 3]]];
const results = [168, 6];

const getGcd = (a, b) => {
  if (b === 0) return a;
  return getGcd(b, a % b);
};

const getLcm = (a, b) => (a * b) / getGcd(a, b);

const solution = (arr) => {
  const lcm = arr.reduce((prev, num, idx) => getLcm(prev, num), arr[0]);

  return lcm;
};

doTests(inputs, results, solution);
