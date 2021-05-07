import doTests from '../../do.test';

const inputs = [
  [[1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'],
  [[7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'],
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right'],
];
const results = ['LRLLLRLLRRL', 'LRLLRRLLLRR', 'LLRLLRLLRL'];

const positions = {
  0: [4, 2],
  1: [1, 1],
  2: [1, 2],
  3: [1, 3],
  4: [2, 1],
  5: [2, 2],
  6: [2, 3],
  7: [3, 1],
  8: [3, 2],
  9: [3, 3],
};

const initialLeftPos = [4, 1];
const initialRightPos = [4, 3];

const calcDistance = ([x1, y1], [x2, y2]) => {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
};

const solution = (numbers, hand) => {
  let answer = '';
  let left = initialLeftPos;
  let right = initialRightPos;

  numbers.forEach((number) => {
    if ([1, 4, 7].find((_number) => number === _number)) {
      answer += 'L';
      left = positions[number];
      return;
    }
    if ([3, 6, 9].find((_number) => number === _number)) {
      answer += 'R';
      right = positions[number];
      return;
    }
    const target = positions[number];
    const leftDist = calcDistance(left, target);
    const rightDist = calcDistance(right, target);
    if (leftDist < rightDist) {
      answer += 'L';
      left = target;
      return;
    }
    if (rightDist < leftDist) {
      answer += 'R';
      right = target;
      return;
    }
    if (hand === 'left') {
      answer += 'L';
      left = target;
      return;
    } else {
      answer += 'R';
      right = target;
      return;
    }
  });

  return answer;
};

doTests(inputs, results, solution);
