import doTests from '../../do.test';

// 최솟값 만들기 - 프로그래머스 lv.2
// 현재 해당 문제의 JavaScript 테스트케이스가 잘못 입력되어 있는지 맞는 로직인데도 전부 틀렸다고 나온다..

const inputs = [
  [
    [1, 4, 2],
    [5, 4, 4],
  ],
  [
    [1, 2],
    [3, 4],
  ],
];
const results = [29, 10];

const solution = (A, B) => {
  A.sort();
  B.sort((a, b) => b - a);

  const answer = A.reduce((prev, val, idx) => prev + val * B[idx], 0);

  return answer;
};

doTests(inputs, results, solution);
