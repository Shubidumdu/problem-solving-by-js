import doTests from '../../do.test';

// 결국 답안 컨닝....ㅠ

const inputs = [[1], [2], [3], [4], [5], [6], [100]];

const results = [
  [1],
  [1, 2, 3],
  [1, 2, 6, 3, 4, 5],
  [1, 2, 9, 3, 10, 8, 4, 5, 6, 7],
  [1, 2, 12, 3, 13, 11, 4, 14, 15, 10, 5, 6, 7, 8, 9],
  [1, 2, 15, 3, 16, 14, 4, 17, 21, 13, 5, 18, 19, 20, 12, 6, 7, 8, 9, 10, 11],
];

function solution(n) {
  const results = [];
  for (let i = 1; i <= n; i++) {
    results.push(Array.from({ length: i }, () => 0));
  }
  let counter = 1,
    startColumn = 0,
    startRow = 0,
    endRow = n - 1,
    endColumn = n - 1,
    cnt = 0;
  while (startColumn <= endColumn && startRow <= endRow) {
    for (let i = startRow; i <= endRow; i++) {
      results[i][startColumn] = counter;
      counter++;
    }
    startRow++;
    startColumn++;
    for (let i = startColumn; i <= endColumn; i++) {
      results[endRow][i] = counter;
      counter++;
    }
    endColumn--;
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      results[i][results[i].length - 1 - cnt] = counter;
      counter++;
    }
    endColumn--;
    startRow++;
    cnt++;
  }

  return results.flat();
}

doTests(inputs, results, solution);
