import doTests from '../../../do.test';

const inputs = [[[0, 2, 7, 1023]]];
const results = [[1, 3, 11, 1535]];

const getCountsOfTwo = (n) => {
  let number = n;
  let counts = 0;
  while (number / 2 >= 1 && number % 2 === 0) {
    number = number / 2;
    counts += 1;
  }
  return counts;
};

const f = (x) => {
  let n = x;
  if (n % 4 === 3) {
    const countsTwo = getCountsOfTwo(n + 1);
    return n + Math.pow(2, countsTwo) / 2;
  } else {
    return n + 1;
  }
};

const solution = (numbers) => {
  const answer = numbers.map((number) => f(number));
  return answer;
};

doTests(inputs, results, solution);
