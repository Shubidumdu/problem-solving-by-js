import doTests from '../../do.test';
import Deque from '../../deque';

const inputs = [
  [
    [
      [0, 0, 0, 1, 1],
      [0, 0, 0, 1, 0],
      [0, 1, 0, 1, 1],
      [1, 1, 0, 0, 1],
      [0, 0, 0, 0, 0],
    ],
  ],
];
const results = [7];

const moveRobot = (robot, board) => {
  const directions = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];

  return directions
    .map((direction) =>
      robot.map(([row, col]) => [row + direction[0], col + direction[1]]),
    )
    .filter((robot) => !checkBlocked(robot, board));
};

const checkBlocked = (robot, board) => {
  let blocked = false;
  robot.forEach(([row, col]) => {
    if (row < 0 || col < 0 || row >= board.length || col >= board.length) {
      blocked = true;
      return;
    }
    if (board[row][col]) blocked = true;
  });
  return blocked;
};

const rotateRobot = (robot, board) => {
  const result = [];
  const [part1_row, part1_col] = robot[0];
  const [part2_row, part2_col] = robot[1];
  // horizontal
  if (part1_row === part2_row) {
    if (part1_row + 1 < board.length) {
      if (
        board[part1_row + 1][part1_col] === 0 &&
        board[part2_row + 1][part2_col] === 0
      ) {
        result.push([
          [part2_row, part2_col],
          [part2_row + 1, part2_col],
        ]);
        result.push([
          [part1_row, part1_col],
          [part1_row + 1, part1_col],
        ]);
      }
    }
    if (part1_row - 1 >= 0) {
      if (
        board[part1_row - 1][part1_col] === 0 &&
        board[part2_row - 1][part2_col] === 0
      ) {
        result.push([
          [part1_row - 1, part1_col],
          [part1_row, part1_col],
        ]);
        result.push([
          [part2_row - 1, part2_col],
          [part2_row, part2_col],
        ]);
      }
    }
  }
  // vertical
  else {
    if (part1_col + 1 < board.length) {
      if (
        board[part1_row][part1_col + 1] === 0 &&
        board[part2_row][part2_col + 1] === 0
      ) {
        result.push([
          [part1_row, part1_col],
          [part1_row, part1_col + 1],
        ]);
        result.push([
          [part2_row, part2_col],
          [part2_row, part2_col + 1],
        ]);
      }
    }
    if (part1_col - 1 >= 0) {
      if (
        board[part1_row][part1_col - 1] === 0 &&
        board[part2_row][part2_col - 1] === 0
      ) {
        result.push([
          [part1_row, part1_col],
          [part1_row, part1_col - 1],
        ]);
        result.push([
          [part2_row, part2_col],
          [part2_row, part2_col - 1],
        ]);
      }
    }
  }

  return result;
};

const checkArrived = (robot, board) => {
  let result = false;
  robot.forEach(([row, col]) => {
    if (row === board.length - 1 && col === board.length - 1) result = true;
  });
  return result;
};

const solution = (board) => {
  const robot = [
    [0, 0],
    [0, 1],
  ];
  let visited = [...Array(board.length)].map(() =>
    [...Array(board.length)].map(() => false),
  );

  const moves = new Deque([[visited, 0, robot]]);

  while (true) {
    const [visited, counts, robot] = moves.shift();
    const tempVisited = visited.map((visit) => [...visit]);
    if (checkArrived(robot, board)) return counts;
    const [[part1_row, part1_col], [part2_row, part2_col]] = robot;
    if (visited[part1_row][part1_col] && visited[part2_row][part2_col])
      continue;
    tempVisited[part1_row][part1_col] = true;
    tempVisited[part2_row][part2_col] = true;
    moveRobot(robot, board).forEach((robot) =>
      moves.push([tempVisited, counts + 1, robot]),
    );
    rotateRobot(robot, board).map((robot) =>
      moves.push([tempVisited, counts + 1, robot]),
    );
  }
};

doTests(inputs, results, solution);
