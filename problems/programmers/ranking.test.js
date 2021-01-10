import doTests from '../../do.test';

// 프로그래머스 - 순위 lv3
const inputs = [
  [
    5,
    [
      [4, 3],
      [4, 2],
      [3, 2],
      [1, 2],
      [2, 5],
    ],
  ],
  [
    5,
    [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
    ],
  ],
];
const results = [2, 5];

// win => 2, lose => -1, unknown => 0, same => 1
const solution = (n, results) => {
  const graph = [...new Array(n)].map((_, idx) => {
    // (n, n)에 대해서는 1, 아닌 경우에 대해서는 0
    return [...new Array(n)].map((_, idx2) => (idx2 === idx ? 1 : 0));
  });

  results.forEach(([win, lose]) => {
    const win_idx = win - 1;
    const lose_idx = lose - 1;

    // 승패 기록 먼저
    graph[win_idx][lose_idx] = 2;
    graph[lose_idx][win_idx] = -1;
  });

  graph.forEach((nodes, row) => {
    nodes.forEach((val, col) => {
      // 이긴 사람은
      if (val === 2) {
        // 진 사람이 이긴 사람들에게도 이긴다.
        graph[col].forEach((val, idx) => {
          if (val === 2) {
            graph[row][idx] = 2;
            graph[idx][row] = -1;
          }
        });
      }
      // 진 사람은
      if (val === -1) {
        // 이긴 사람이 졌던 사람들에게도 진다.
        graph[col].forEach((val, idx) => {
          if (val === -1) {
            graph[row][idx] = -1;
            graph[idx][row] = 2;
          }
        });
      }
    });
  });

  // 승패 유추가 가능한 경우만 계산
  const answer = graph.reduce((prev, arr) => {
    if (!arr.includes(0)) return prev + 1;
    return prev;
  }, 0);

  return answer;
};

doTests(inputs, results, solution);
