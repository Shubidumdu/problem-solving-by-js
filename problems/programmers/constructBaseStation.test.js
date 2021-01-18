import doTests from '../../do.test';

// 기지국 설치 - 프로그래머스 lv.3

const inputs = [
  [11, [4, 11], 1],
  [16, [9], 2],
];
const results = [3, 3];

const checkCoverCount = (shouldCover, k) => {
  return shouldCover.reduce((counts, val) => counts + Math.ceil(val / k), 0);
};

const solution = (n, stations, w) => {
  let shouldCover = [];
  const coverage = stations.map((s) => [s - w, s + w]);
  coverage.forEach(([coverStart, coverEnd], idx) => {
    if (idx === 0) {
      if (coverStart > 1) shouldCover.push(coverStart - 1);
    }
    if (coverage[idx + 1]) {
      const [nextStart, nextEnd] = coverage[idx + 1];
      shouldCover.push(nextStart - coverEnd - 1);
    }
    if (idx === coverage.length - 1) {
      if (n - coverEnd > 0) shouldCover.push(n - coverEnd);
    }
  });

  const answer = checkCoverCount(shouldCover, 2 * w + 1);

  return answer;
};

doTests(inputs, results, solution);
