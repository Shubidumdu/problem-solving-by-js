import doTests from '../../do.test';

// 프로그래머스 LV.2 - 게임 맵 최단거리
// 효율성 테스트를 통과 못한다..

const inputs = [
  [
    [
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 0, 1],
      [0, 0, 0, 0, 1],
    ],
  ],
  [
    [
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 0, 0],
      [0, 0, 0, 0, 1],
    ],
  ],
];
const results = [11, -1];

const directions = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

const solution = (maps) => {
  const cache = [...Array(maps.length)].map(() =>
    [...Array(maps[0].length)].map(() => Infinity),
  );
  cache[0][0] = 1;
  const positions = [[0, 0]];
  const counts = [1];
  let head = 0,
    tail = 0;

  while (true) {
    const target = cache[maps.length - 1][maps[0].length - 1];
    if (target !== Infinity) {
      return target;
    }
    if (head > tail) break;
    const [row, col] = positions[head];
    const count = counts[head];
    head += 1;

    // 아닌 경우
    directions.forEach(([_row, _col]) => {
      const nextRow = _row + row;
      const nextCol = _col + col;
      const nextCount = count + 1;
      if (
        nextRow < 0 ||
        nextCol < 0 ||
        nextRow > maps.length - 1 ||
        nextCol > maps[0].length - 1
      )
        return;
      if (maps[nextRow][nextCol] === 0) return;
      if (cache[nextRow][nextCol] < nextCount) return;
      positions.push([nextRow, nextCol]);
      counts.push(nextCount);
      tail += 1;
      cache[nextRow][nextCol] = nextCount;
      console.log(cache);
    });
  }

  return -1;
};

doTests(inputs, results, solution);
