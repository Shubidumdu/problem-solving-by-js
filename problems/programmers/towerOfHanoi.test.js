import doTests from '../../do.test';

const inputs = [[2], [3]];
const results = [
  [
    [1, 2],
    [1, 3],
    [2, 3],
  ],
  [
    [1, 3],
    [1, 2],
    [3, 2],
    [1, 3],
    [2, 1],
    [2, 3],
    [1, 3],
  ],
];

const hanoi = (n) => {
  if (n === 1) return [[1, 3]];
  const hanoi_before = hanoi(n - 1);
  const before = hanoi_before.map((numbers) => {
    return numbers.map((n) => {
      if (n === 3) return 2;
      if (n === 2) return 3;
      return n;
    });
  });
  const after = hanoi_before.map((numbers) => {
    return numbers.map((n) => {
      if (n === 1) return 2;
      if (n === 2) return 1;
      return n;
    });
  });
  return [...before, [1, 3], ...after];
};

const solution = (n) => {
  const answer = hanoi(n);
  console.log(answer);

  return answer;
};

doTests(inputs, results, solution);
