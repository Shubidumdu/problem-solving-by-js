import doTests from '../../do.test';

// N진수 게임 - 프로그래머스 LV.2
// JS라서 쉬운 문제인걸까...??

const inputs = [
  [2, 4, 2, 1],
  [16, 16, 2, 1],
  [16, 16, 2, 2],
];
const results = ['0111', '02468ACE11111111', '13579BDF01234567'];

const solution = (n, t, m, p) => {
  let sequence = '';

  for (let i = 0; i < m * t; i++) {
    sequence += i.toString(n).toUpperCase();
  }

  let answer = '';

  for (let i = 0; i < t; i++) {
    answer += sequence[p - 1 + i * m];
  }

  return answer;
};

doTests(inputs, results, solution);
