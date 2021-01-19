import doTests from '../../do.test';

const inputs = [[4]];
const results = [2];

// N-Queen - 프로그래머스 lv.3
// 다시 느끼지만 unshift보다 pop이 훠얼씬 더 빠르다.

const checkQueen = (board, row, col) => {
  let result = true;
  board.forEach((board_row, row_idx) => {
    if (!result) return;
    // check col
    if (board_row[col]) result = false;
    // check diagonal
    if (row > row_idx) {
      if (board_row[col - (row - row_idx)]) result = false;
      if (board_row[col + (row - row_idx)]) result = false;
    }
    if (row < row_idx) {
      if (board_row[col - (row_idx - row)]) result = false;
      if (board_row[col + (row_idx - row)]) result = false;
    }
  });
  return result;
};

const copyBoard = (board) => {
  return board.map((row) => [...row]);
};

const solution = (n) => {
  let answer = 0;
  const board = [...Array(n)].map(() => [...Array(n)].map((_) => false));
  const tasks = [...Array(n)].map((_, idx) => {
    const temp = copyBoard(board);
    temp[0][idx] = true;
    return [temp, 1];
  });

  while (tasks.length) {
    const [board, row] = tasks.pop();
    if (row === n) {
      answer += 1;
      continue;
    }
    [...Array(n).keys()].forEach((col) => {
      if (checkQueen(board, row, col)) {
        const temp = copyBoard(board);
        temp[row][col] = true;
        tasks.push([temp, row + 1]);
      }
    });
  }

  return answer;
};

doTests(inputs, results, solution);
