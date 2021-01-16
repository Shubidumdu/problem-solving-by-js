import doTests from '../../do.test';

const inputs = [
  [
    5,
    [
      [1, 0, 0, 1],
      [1, 1, 1, 1],
      [2, 1, 0, 1],
      [2, 2, 1, 1],
      [5, 0, 0, 1],
      [5, 1, 0, 1],
      [4, 2, 1, 1],
      [3, 2, 1, 1],
    ],
  ],
  [
    5,
    [
      [0, 0, 0, 1],
      [2, 0, 0, 1],
      [4, 0, 0, 1],
      [0, 1, 1, 1],
      [1, 1, 1, 1],
      [2, 1, 1, 1],
      [3, 1, 1, 1],
      [2, 0, 0, 0],
      [1, 1, 1, 0],
      [2, 2, 0, 1],
    ],
  ],
];
const results = [
  [
    [1, 0, 0],
    [1, 1, 1],
    [2, 1, 0],
    [2, 2, 1],
    [3, 2, 1],
    [4, 2, 1],
    [5, 0, 0],
    [5, 1, 0],
  ],
  [
    [0, 0, 0],
    [0, 1, 1],
    [1, 1, 1],
    [2, 1, 1],
    [3, 1, 1],
    [4, 0, 0],
  ],
];

const makeMap = (n) => {
  return [...Array(n)].map(() => [...Array(n)].map(() => false));
};

const checkAddPillar = (pillarMap, beamMap, x, y) => {
  if (y === 0) return true;
  if (beamMap[x][y] || beamMap[x - 1][y]) return true;
  if (pillarMap[x][y - 1]) return true;
  return false;
};

const checkAddBeam = (pillarMap, beamMap, x, y) => {
  if (pillarMap[x][y - 1] || pillarMap[x + 1][y - 1]) return true;
  if (beamMap[x - 1][y] && beamMap[x + 1][y]) return true;
  return false;
};

const checkDelPillar = (pillarMap, beamMap, x, y) => {
  if (pillarMap[x][y + 1]) {
    if (!beamMap[x][y + 1] && !beamMap[x - 1][y + 1]) return false;
  }
  if (beamMap[x][y + 1]) {
    if (
      (!beamMap[x - 1][y + 1] || !beamMap[x + 1][y + 1]) &&
      !pillarMap[x + 1][y]
    )
      return false;
  }
  if (beamMap[x - 1][y + 1]) {
    if ((!beamMap[x - 2][y + 1] || !beamMap[x][y + 1]) && !pillarMap[x - 1][y])
      return false;
  }
  return true;
};

const checkDelBeam = (pillarMap, beamMap, x, y) => {
  if (pillarMap[x][y]) {
    if (!beamMap[x - 1][y] && !pillarMap[x][y - 1]) return false;
  }
  if (pillarMap[x + 1][y]) {
    if (!beamMap[x + 1][y] && !pillarMap[x + 1][y - 1]) return false;
  }
  if (beamMap[x - 1][y]) {
    if (!pillarMap[x][y - 1] && !pillarMap[x - 1][y - 1]) return false;
  }
  if (beamMap[x + 1][y]) {
    if (!pillarMap[x + 1][y - 1] && !pillarMap[x + 2][y - 1]) return false;
  }
  return true;
};

const makeAnswer = (pillarMap, beamMap) => {
  let x = 0,
    y = 0;
  const answer = [];
  const end = pillarMap.length;
  while (x < end) {
    if (pillarMap[x][y]) answer.push([x, y, 0]);
    if (beamMap[x][y]) answer.push([x, y, 1]);
    if (y === end - 1) {
      x += 1;
      y = 0;
      continue;
    }
    y += 1;
  }
  return answer;
};

const solution = (n, build_frame) => {
  const pillarMap = makeMap(n + 1);
  const beamMap = makeMap(n + 1);
  // add padding
  pillarMap[-1] = [...Array(n + 1)].map(() => false);
  pillarMap[-2] = [...Array(n + 1)].map(() => false);
  beamMap[-1] = [...Array(n)].map(() => false);
  beamMap[-2] = [...Array(n)].map(() => false);

  build_frame.forEach(([x, y, type, action]) => {
    // add
    if (action === 1) {
      // pillar
      if (type === 0) {
        if (checkAddPillar(pillarMap, beamMap, x, y)) pillarMap[x][y] = true;
      }
      // beam
      if (type === 1) {
        if (checkAddBeam(pillarMap, beamMap, x, y)) beamMap[x][y] = true;
      }
    }
    // delete
    if (action === 0) {
      // pillar
      if (type === 0) {
        if (checkDelPillar(pillarMap, beamMap, x, y)) pillarMap[x][y] = false;
      }
      // beam
      if (type === 1) {
        if (checkDelBeam(pillarMap, beamMap, x, y)) beamMap[x][y] = false;
      }
    }
  });

  return makeAnswer(pillarMap, beamMap);
};

doTests(inputs, results, solution);
