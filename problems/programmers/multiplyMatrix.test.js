import doTests from '../../do.test';

// 행렬의 곱셈 - 프로그래머스 lv.2
// 행이 어쩌고, 열이 어쩌고 하다보면 헷갈리는 문제

const inputs = [
  [
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ],
  ],
  [
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ],
  ],
];

const results = [
  [
    [15, 15],
    [15, 15],
    [15, 15],
  ],
  [
    [22, 22, 11],
    [36, 28, 18],
    [29, 20, 14],
  ],
];

const multiplyRowAndCol = (arr1, arr2, row, col) => {
  let pointer = 0;
  let answer = 0;

  while (pointer < arr2.length) {
    answer += arr1[row][pointer] * arr2[pointer][col];
    pointer += 1;
  }

  return answer;
};

const solution = (arr1, arr2) => {
  let pointer = [0, 0];
  const answer = [...Array(arr1.length)].map(() =>
    [...Array(arr2[0].length)].fill(0),
  );

  while (true) {
    const [row, col] = pointer;
    if (row >= arr1.length) break;
    answer[row][col] = multiplyRowAndCol(arr1, arr2, row, col);
    if (col === arr2[0].length - 1) {
      pointer[1] = 0;
      pointer[0] = row + 1;
    } else {
      pointer[1] = col + 1;
    }
  }

  return answer;
};

doTests(inputs, results, solution);
