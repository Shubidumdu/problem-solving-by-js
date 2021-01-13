import doTests from '../../do.test';

const inputs = [
  [4, [4, 3, 3]],
  [1, [2, 1, 2]],
  [3, [1, 1]],
];
const results = [12, 6, 0];

// 야근지수 - 프로그래머스 lv.3

// 한 시점에 동일한 작업량의 일들이 있다면 한꺼번에 처리하는 작업이 포인트.
const entriesOfMaxValue = (arr) =>
  arr.reduce(
    ({ idx: maxIdx, val: maxVal }, val, idx) => {
      if (maxVal < val) return { idx: [idx], val };
      if (maxVal === val) return { idx: [...maxIdx, idx], val };
      return { idx: maxIdx, val: maxVal };
    },
    {
      idx: [],
      val: 0,
    },
  );

const solution = (n, works) => {
  let counts = 0;
  while (counts < n) {
    const { idx, val } = entriesOfMaxValue(works);
    if (val === 0) return 0;
    idx.forEach((maxIdx) => {
      if (counts >= n) return;
      works[maxIdx] -= 1;
      counts += 1;
    });
  }

  const answer = works.reduce((prev, val) => prev + val ** 2, 0);

  return answer;
};

doTests(inputs, results, solution);
