import doTests from '../../do.test';

// 올바른 괄호 - 프로그래머스 lv.2

const inputs = [['()()'], ['(())()'], [')()('], ['(()(']];
const results = [true, true, false, false];

const solution = (s) => {
  // '(' => +1 , ')' => -1
  let counts = 0;

  [...s].forEach((char) => {
    if (counts < 0) return;
    if (char === '(') counts += 1;
    if (char === ')') counts -= 1;
  });

  if (counts === 0) return true;
  return false;
};

doTests(inputs, results, solution);
