import doTests from '../../do.test';

const inputs = [
  [
    [93, 30, 55],
    [1, 30, 5],
  ],
  [
    [95, 90, 99, 99, 80, 99],
    [1, 1, 1, 1, 1, 1],
  ],
];
const results = [
  [2, 1],
  [1, 3, 2],
];

const solution = (progresses, speeds) => {
  const answer = [];
  let tasks = [...progresses];

  while (tasks.length) {
    let counts = 0;
    tasks = tasks.map((progress, idx) => {
      const speed = speeds[idx];
      return progress + speed;
    });
    while (tasks[0] >= 100) {
      counts += 1;
      tasks.shift();
      speeds.shift();
    }
    if (counts) answer.push(counts);
    counts = 0;
  }

  return answer;
};

doTests(inputs, results, solution);
