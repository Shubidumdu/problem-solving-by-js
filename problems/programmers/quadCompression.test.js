import doTests from '../../do.test';

// 쿼드압축 후 개수 세기 - 프로그래머스 lv.2

const inputs = [
  [
    [
      [1, 1, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 1],
      [1, 1, 1, 1],
    ],
  ],
  [
    [
      [1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 1, 1, 1, 1],
      [0, 1, 0, 0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1, 0, 0, 1],
      [0, 0, 0, 0, 1, 1, 1, 1],
    ],
  ],
];
const results = [
  [4, 9],
  [10, 15],
];

const solution = (arr) => {
  const answer = [0, 0];
  let start = [0, 0];
  let end = [arr.length, arr.length];

  const getAnswer = (arr, start, end) => {
    const [row_start, col_start] = start;
    const [row_end, col_end] = end;
    const counts = [0, 0];
    const full_count = (row_end - row_start) ** 2;

    let row = row_start;
    let col = col_start;

    while (row < row_end) {
      col = col_start;
      while (col < col_end) {
        const val = arr[row][col];
        counts[val] += 1;
        col += 1;
      }
      row += 1;
    }

    if (counts[0] === full_count) {
      answer[0] += 1;
      return;
    }
    if (counts[1] === full_count) {
      answer[1] += 1;
      return;
    }

    const new_distance = (row_end - row_start) / 2;

    getAnswer(
      arr,
      [row_start, col_start],
      [row_start + new_distance, col_start + new_distance],
    );
    getAnswer(
      arr,
      [row_start, col_start + new_distance],
      [row_start + new_distance, col_start + 2 * new_distance],
    );
    getAnswer(
      arr,
      [row_start + new_distance, col_start],
      [row_start + 2 * new_distance, col_start + new_distance],
    );
    getAnswer(
      arr,
      [row_start + new_distance, col_start + new_distance],
      [row_start + 2 * new_distance, col_start + 2 * new_distance],
    );
  };

  getAnswer(arr, start, end);

  return answer;
};

doTests(inputs, results, solution);
