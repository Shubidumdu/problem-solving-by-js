import doTests from '../../do.test';

const inputs = [[15]];
const results = [4];

// 숫자의 표현 - 프로그래머스 lv.2

const hasSequence = (n, current, target) => {
  if (current + n > target) return false;
  if (current + n === target) return true;
  return hasSequence(n + 1, current + n, target);
};

const solution = (values) => {
  let number = 1;
  let answer = 0;

  while (number <= values) {
    if (hasSequence(number, 0, values)) answer += 1;
    number += 1;
  }

  return answer;
};

doTests(inputs, results, solution);
