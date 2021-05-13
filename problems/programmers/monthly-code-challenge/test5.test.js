import doTests from '../../../do.test';

const inputs = [
  [13, 17],
  [24, 27],
];
const results = [43, 52];

const getCounts = (n) => {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) result++;
  }

  return result;
};

const solution = (left, right) => {
  let numbers = [...Array(right - left + 1).keys()].map((n) => n + left);
  let answer = 0;

  numbers.forEach((number) => {
    const counts = getCounts(number);
    if (counts % 2 === 0) answer += number;
    else answer -= number;
  });

  return answer;
};

doTests(inputs, results, solution);
