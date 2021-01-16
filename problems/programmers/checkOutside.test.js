import doTests from '../../do.test';

// 외벽 점검 - 프로그래머스 lv.3

const inputs = [
  [12, [1, 5, 6, 10], [1, 2, 3, 4]],
  [12, [1, 3, 4, 9, 10], [3, 5, 7]],
];
const results = [2, 1];

const makeSection = (type, start, distance, round) => {
  if (type === 'reverse') {
    let moved = start - distance;
    if (moved < 0) moved += round;
    return [moved, start];
  }
  let moved = start + distance;
  if (moved >= round) moved -= round;
  return [start, moved];
};

const checkPoints = (weak, [start, end]) => {
  if (end < start)
    return weak.filter((weak_point) => end < weak_point && start > weak_point);
  return weak.filter((weak_point) => start > weak_point || end < weak_point);
};

const solution = (round, weak, dist) => {
  let answer = -1;

  const dfs = (weak, dist, round, counts) => {
    if (answer !== -1 && answer < counts) return;
    if (!weak.length) {
      if (answer === -1) {
        answer = counts;
        return;
      }
      answer = Math.min(counts, answer);
      return;
    }
    if (!dist.length) {
      return;
    }
    const temp_distance = [...dist];
    const distance = temp_distance.pop();
    weak.forEach((weak_point, idx) => {
      const section = makeSection('forward', weak_point, distance, round);
      const forwardResult = checkPoints(weak, section);
      const reverse_section = makeSection(
        'reverse',
        weak_point,
        distance,
        round,
      );
      const reverseResult = checkPoints(weak, reverse_section);
      const result =
        forwardResult.length < reverseResult.length
          ? forwardResult
          : reverseResult;
      dfs(result, temp_distance, round, counts + 1);
    });
  };

  dfs(weak, dist, round, 0);

  return answer;
};

doTests(inputs, results, solution);
