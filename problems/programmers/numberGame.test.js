import doTests from '../../do.test';

// 숫자 게임 - 프로그래머스 lv.3
// 새로운 발견. `[].shift`는 `[].pop`보다 오래걸린다.

const inputs = [
  [
    [5, 1, 3, 7],
    [2, 2, 6, 8],
  ],
  [
    [2, 2, 2, 2],
    [1, 1, 1, 1],
  ],
  [
    [1, 2, 3, 4, 4],
    [2, 2, 3, 5, 6],
  ],
];
const results = [3, 0, 4];

const solution = (A, B) => {
  A.sort((a, b) => b - a);
  B.sort((a, b) => b - a);
  let answer = 0;
  let NumberA = A.pop();
  while (B.length) {
    let NumberB = B.pop();
    if (NumberA < NumberB) {
      NumberA = A.pop();
      answer += 1;
    }
  }

  return answer;
};

doTests(inputs, results, solution);
