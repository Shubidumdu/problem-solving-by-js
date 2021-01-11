import doTests from '../../do.test';

// 가장 큰 숫자 - 프로그래머스 lv.2

const inputs = [[78], [15]];
const results = [83, 23];

const countOne = (number) => {
  const text = number.toString(2);
  return text.split('1').length - 1;
};

const solution = (n) => {
  let next = n + 1;

  while (true) {
    if (countOne(next) !== countOne(n)) {
      next += 1;
      continue;
    }
    break;
  }

  return next;
};

doTests(inputs, results, solution);
