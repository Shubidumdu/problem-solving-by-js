import doTests from '../../do.test';

// 징검다리 건너기 - 프로그래머스 lv.3

const inputs = [[[2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3]];
const results = [3];

const checkAnswer = (stones, k, target) => {
  let counts = 0;
  let possible = false;
  stones.forEach((stone) => {
    if (possible) {
      return;
    }
    if (stone <= target) {
      counts += 1;
      if (counts >= k) {
        possible = true;
      }
    } else {
      counts = 0;
    }
  });
  return possible;
};

const solution = (stones, k) => {
  let start = 1;
  let end = 200_000_000;
  let target = Math.floor((start + end) / 2);
  let answer = target;

  checkAnswer(stones, k, target);

  while (start <= end) {
    if (checkAnswer(stones, k, target)) {
      answer = target;
      end = target - 1;
    } else {
      start = target + 1;
    }
    target = Math.floor((start + end) / 2);
  }

  return answer;
};

doTests(inputs, results, solution);
