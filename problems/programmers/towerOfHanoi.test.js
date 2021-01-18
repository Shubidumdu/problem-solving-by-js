import doTests from '../../do.test';

const inputs = [[2]];
const results = [
  [
    [1, 2],
    [1, 3],
    [2, 3],
  ],
];

const makeHanoi = (n) => {
  const result = [...Array(3)].map(() => []);
  result[0] = [...Array(n).keys()].map((n) => n + 1).reverse();
  return result;
};

const getTops = (hanoi) => {
  const tops = hanoi.map((arr) => arr[arr.length - 1] || 0);
  return tops;
};

const moveBlock = (result, hanoi, from, to) => {
  const block = hanoi[from].pop();
  hanoi[to].push(block);
  result.push([from, to]);
  return hanoi;
};

const solution = (n) => {
  const hanoi = makeHanoi(n);
  let target = n;
  let targetIdx = 0;
  const result = [];
  while (true) {
    if (hanoi[2].includes(target)) target -= 1;
    if (target < 1) break;
    hanoi.forEach((arr, idx) => {
      if (arr.includes(target)) targetIdx = idx;
    });
    const tops = getTops(hanoi);
    const [left, mid, right] = tops;
    const minIdx = tops.indexOf(Math.min(...tops));
    const maxIdx = tops.indexOf(Math.max(...tops));
    const midIdx = tops.find((val, idx) => idx !== minIdx && idx !== maxIdx);
    // 최초에 아무것도 옮겨지지 않았을 때
    if (!mid && !right) {
      moveBlock(result, hanoi, 0, (n % 2) + 1);
      continue;
    }
    // // 상단에 목표가 보이는 경우
    // if (tops.indexOf(target) !== -1) {
    //   // 끝으로 옮길 수 있으면 옮긴다.
    //   if (right === 0 || right > target) {
    //     moveBlock(result, hanoi, targetIdx, 2);
    //     continue;
    //   }
    // }
    // 빈 공간이 있는 경우
    if (!mid || !right) {
      const maxIdx = tops.indexOf(Math.max(...tops));
      const emptyIdx = tops.indexOf(0);
      moveBlock(result, hanoi, maxIdx, emptyIdx);
      continue;
    }
  }

  return;
};

doTests(inputs, results, solution);
