import doTests from '../../do.test';

const inputs = [[5], [6], [5000]];
const results = [2, 2, 5];

const solution = (n) => {
  let target = n;
  let answer = 1;

  while (target > 1) {
    if (target % 2 === 1) {
      target -= 1;
      answer += 1;
    } else {
      target /= 2;
    }
  }

  return answer;
};

doTests(inputs, results, solution);
