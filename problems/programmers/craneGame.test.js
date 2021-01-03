import doTests from '../../do.test';

const inputs = [
  [
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4],
  ],
];
const results = [4];

const solution = (board, moves) => {
  const dolls = [];
  let answer = 0;

  moves.forEach((position) => {
    const index = position - 1;
    let pulled = false;
    // 뽑기
    board.forEach((row) => {
      if (pulled) return;
      if (row[index] === 0) return;
      dolls.push(row[index]);
      row[index] = 0;
      pulled = true;
    });
  });

  // 2개씩 없애기
  while (true) {
    let counts = 0;
    let removed = false;
    dolls.forEach((doll, index) => {
      if (removed) return;
      const nextDoll = dolls[index + 1];
      if (!nextDoll) return;
      if (doll === nextDoll) {
        counts += 2;
        dolls.splice(index, 2);
        removed = true;
      }
    });
    answer += counts;
    if (!removed) break;
  }

  return answer;
};

doTests(inputs, results, solution);
