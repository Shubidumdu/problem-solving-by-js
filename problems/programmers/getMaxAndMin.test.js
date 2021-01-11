import doTests from '../../do.test';

// 최댓값과 최솟값 - 프로그래머스 lv.2

const inputs = [['1 2 3 4'], ['-1 -2 -3 -4'], ['-1 -1']];
const results = ['1 4', '-4 -1', '-1 -1'];

const solution = (s) => {
  const numbers = s.split(' ').map((n) => parseInt(n));
  numbers.sort((a, b) => a - b);

  return `${numbers[0]} ${numbers[numbers.length - 1]}`;
};

doTests(inputs, results, solution);
