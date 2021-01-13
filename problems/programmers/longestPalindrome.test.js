import doTests from '../../do.test';

// 가장 긴 팰린드롬 - 프로그래머스 lv.3

const inputs = [
  ['abcdcba'],
  ['abacde'],
  ['abba'],
  ['abcbaqwertrewqq'],
  ['abcbaqwqabcba'],
  ['abaabaaaaaaa'],
  ['a'],
  ['abcde'],
  [''],
];
const results = [7, 3, 4, 9, 13, 7, 1, 1, 0];

const getOddLengthOfPal = (string, index) => {
  let counts = 1;
  let distance = 1;
  while (true) {
    const left = string[index - distance];
    const right = string[index + distance];
    if (!left || !right) break;
    if (left !== right) break;
    counts += 2;
    distance += 1;
  }
  return counts;
};

const getEvenLengthOfPal = (string, index) => {
  if (!string[index - 1]) return 1;
  if (string[index - 1] !== string[index]) return 1;
  let counts = 2;
  let distance = [-2, 1];
  while (true) {
    const [leftDist, rightDist] = distance;
    const left = string[index + leftDist];
    const right = string[index + rightDist];
    if (!left || !right) break;
    if (left !== right) break;
    counts += 2;
    distance = [leftDist - 1, rightDist + 1];
  }
  return counts;
};

const solution = (s) => {
  if (!s) return 0;
  const results = [...Array(s.length).keys()].map((idx) =>
    Math.max(getOddLengthOfPal(s, idx), getEvenLengthOfPal(s, idx)),
  );
  return Math.max(...results);
};

doTests(inputs, results, solution);
