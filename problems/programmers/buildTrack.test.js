import doTests from '../../do.test';

const inputs = [
  [
    [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
  ],
  [
    [
      [0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 1],
      [0, 0, 1, 0, 0, 0, 1, 0],
      [0, 1, 0, 0, 0, 1, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
    ],
  ],
  [
    [
      [0, 0, 1, 0],
      [0, 0, 0, 0],
      [0, 1, 0, 1],
      [1, 0, 0, 0],
    ],
  ],
  [
    [
      [0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 0],
      [0, 0, 1, 0, 0, 0],
      [1, 0, 0, 1, 0, 1],
      [0, 1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0],
    ],
  ],
];
const results = [900, 3800, 2100, 3200];

const checkBuild = (visited, position, board) => {
  const moves = [];
  const [row, col] = position;
  const direction = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  direction.forEach(([x, y]) => {
    if (
      row + x < 0 ||
      col + y < 0 ||
      row + x > board.length - 1 ||
      col + y > board.length - 1 ||
      visited[row + x][col + y]
    )
      return;
    if (!board[row + x][col + y]) moves.push([row + x, col + y]);
  });

  return moves;
};

const makeTempBoard = (board) => board.map((row) => row.map((col) => col));

const checkCost = (before, after) => {
  const [before_row, before_col] = before;
  const [after_row, after_col] = after;
  if (before_row === after_row) return 100;
  if (before_col === after_col) return 100;
  return 600;
};

const solution = (board) => {
  const visited = board.map((row) => row.map((val) => 0));
  visited[0][0] = 1;
  const needVisit = [[null, [0, 0], 0, visited]];
  let answer = Infinity;
  while (needVisit.length > 0) {
    const [before, now, cost, visited] = needVisit.pop();
    if (now[0] === board.length - 1 && now[1] === board.length - 1)
      answer = Math.min(cost, answer);
    const afters = checkBuild(visited, now, board);
    const nexts = afters.map((after) => {
      const tempVisit = makeTempBoard(visited);
      tempVisit[after[0]][after[1]] = 1;
      const need_cost = !before ? 100 : checkCost(before, after);
      return [now, after, cost + need_cost, tempVisit];
    });
    needVisit.push(...nexts);
  }

  return answer;
};

doTests(inputs, results, solution);
