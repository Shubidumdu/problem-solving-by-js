import doTests from '../../do.test';

const inputs = [
  [
    0,
    [
      [1, 0, 0, 0],
      [1, 0, 0, 1],
      [1, 1, 0, 1],
      [1, 1, 0, 1],
    ],
  ],
  [
    1,
    [
      [1, 0, 0, 0],
      [1, 0, 0, 1],
      [1, 1, 0, 1],
      [1, 1, 0, 1],
    ],
  ],
];
const results = [2, 1];

const blockTypes = [
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [1, 1],
  ],
  [
    [0, 1],
    [1, 0],
    [1, 1],
  ],
  [
    [0, 0],
    [0, 1],
    [1, 1],
  ],
  [
    [0, 0],
    [0, 1],
    [1, 0],
  ],
];

const getResult = (board) => {
  let counts = 0;
  board.forEach((row) => {
    if (row.indexOf(0) === -1) counts += 1;
  });
  return counts;
};

const deepCopy = (arr) => {
  return JSON.parse(JSON.stringify(arr));
};

const fillBlock = (type, board) => {
  const size = board.length;
  // [[0, 0], [1, 0], [2, 0]]
  const block = blockTypes[type];
  let result = 0;
  board.forEach((row, rowIdx) => {
    // 각 칸마다 블록을 넣어본다
    row.forEach((_, colIdx) => {
      let cannot = false;
      const copyBoard = deepCopy(board);
      // 블록 넣기
      block.forEach(([_row, _col]) => {
        if (cannot) return;
        const blockRow = rowIdx + _row;
        const blockCol = colIdx + _col;
        // 범위를 벗어나거나, 블록이 들어갈 수 없다면 패스한다.
        if (
          blockRow > size - 1 ||
          blockCol > size - 1 ||
          blockRow < 0 ||
          blockCol < 0
        ) {
          cannot = true;
          return;
        } else {
          if (board[blockRow][blockCol]) {
            cannot = true;
            return;
          }
          copyBoard[blockRow][blockCol] = 1;
        }
      });
      if (cannot) return;
      const tempResult = getResult(copyBoard);
      if (tempResult >= result) result = tempResult;
    });
  });
  return result;
};

const solution = (block, board) => {
  const answer = fillBlock(block, board);
  return answer;
};

doTests(inputs, results, solution);
