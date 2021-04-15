import doTests from '../../../do.test';

const inputs = [['[](){}'], ['}]()[{'], ['[)(]'], ['}}}'], ['}{'], ['))((']];
const results = [3, 2, 0, 0, 1, 1];

const rotate = (sentence) => {
  const first = sentence[0];
  const rest = sentence.slice(1);

  return `${rest}${first}`;
};

const isRight = (sentence) => {
  let counts = [0, 0, 0];

  [...sentence].forEach((char) => {
    const check = counts.find((num) => num < 0);
    if (check) return;
    if (char === '(') counts[0] += 1;
    if (char === '[') counts[1] += 1;
    if (char === '{') counts[2] += 1;
    if (char === ')') counts[0] -= 1;
    if (char === ']') counts[1] -= 1;
    if (char === '}') counts[2] -= 1;
  });

  const check = counts.find((num) => num !== 0);
  if (check) return false;
  return true;
};

const solution = (sentence) => {
  let answer = 0;
  let rotated = sentence;
  for (let i = 0; i < sentence.length; i++) {
    rotated = rotate(rotated);
    const check = isRight(rotated);
    if (check) answer += 1;
  }

  return answer;
};

doTests(inputs, results, solution);
