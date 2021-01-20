import doTests from '../../do.test';

// 프렌즈4블록 - 프로그래머스 lv.2
// 말 그대로 구현만 하면 되는데... 구현하기 귀찮게 해놨다..

const inputs = [
  [4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF']],
  [6, 6, ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ']],
];
const results = [14, 15];

const scanBlocks = (board, m, n) => {
  let has = false;

  const checks = [...Array(m)].map(() => [...Array(n)].map(() => false));
  for (let row = 0; row < m - 1; row++) {
    for (let col = 0; col < n - 1; col++) {
      const value = board[row][col];
      if (
        value &&
        value === board[row + 1][col] &&
        value === board[row][col + 1] &&
        value === board[row + 1][col + 1]
      ) {
        has = true;
        checks[row][col] = true;
        checks[row][col + 1] = true;
        checks[row + 1][col] = true;
        checks[row + 1][col + 1] = true;
      }
    }
  }
  return [has, checks];
};

const removeBlocks = (checks, board, m, n) => {
  let counts = 0;
  const temp = [...board].map((row) => [...row]);

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (checks[row][col]) {
        counts += 1;
        for (let r = row; r > 0; r--) {
          if (!temp[r - 1][col]) {
            temp[r][col] = null;
            break;
          }
          temp[r][col] = temp[r - 1][col];
          temp[r - 1][col] = null;
        }
      }
    }
  }

  return [counts, temp];
};

const solution = (m, n, board) => {
  let answer = 0;
  let target = board;

  while (true) {
    const [has, scans] = scanBlocks(target, m, n);
    if (!has) break;
    const [counts, removes] = removeBlocks(scans, target, m, n);
    answer += counts;
    target = removes;
  }

  return answer;
};

doTests(inputs, results, solution);
