import doTests from '../../do.test';

// 방문 길이 - 프로그래머스 lv.3

const inputs = [['ULURRDLLU'], ['LULLLLLLU']];
const results = [7, 7];

const directions = {
  U: [0, 1],
  L: [-1, 0],
  R: [1, 0],
  D: [0, -1],
};

const cacheMove = (cache, row, col, afterRow, afterCol) => {
  cache.push(
    row.toString() + col.toString() + afterRow.toString() + afterCol.toString(),
  );
  cache.push(
    afterRow.toString() + afterCol.toString() + row.toString() + col.toString(),
  );
  return cache;
};

const isCached = (cache, row, col, afterRow, afterCol) => {
  if (
    cache.includes(
      row.toString() +
        col.toString() +
        afterRow.toString() +
        afterCol.toString(),
    )
  )
    return true;
  return false;
};

const solution = (dirs) => {
  let row = 0,
    col = 0;
  let cache = [];
  let answer = 0;

  [...dirs].forEach((dir) => {
    const [moveRow, moveCol] = directions[dir];
    const afterRow = row + moveRow;
    const afterCol = col + moveCol;
    if (afterRow < -5) return;
    if (afterRow > 5) return;
    if (afterCol < -5) return;
    if (afterCol > 5) return;
    if (isCached(cache, row, col, afterRow, afterCol)) {
      row += moveRow;
      col += moveCol;
      return;
    }
    cache = cacheMove(cache, row, col, afterRow, afterCol);
    row += moveRow;
    col += moveCol;
    answer += 1;
  });

  return answer;
};

doTests(inputs, results, solution);
