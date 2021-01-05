import doTests from '../../do.test';

// 이분탐색

const inputs = [
  [[9, -1, -5]],
  [[-16, 27, 65, -2, 58, -92, -71, -68, -61, -33]],
];
const results = [3, 6];

const solution = (a) => {
  if (a.length < 3) return a.length;

  let answer = a.length;
  let leftIdx = 0;
  let leftMin = a[leftIdx];
  let rightIdx = a.length - 1;
  let rightMin = a[rightIdx];

  while (rightIdx - leftIdx > 1) {
    if (leftMin > rightMin) leftIdx += 1;
    else rightIdx -= 1;

    const target = a[leftMin > rightMin ? leftIdx : rightIdx];

    if (target > leftMin && target > rightMin) answer -= 1;
    if (leftMin > rightMin && target < leftMin) leftMin = target;
    else if (rightMin > leftMin && target < rightMin) rightMin = target;
  }

  return answer;
};

doTests(inputs, results, solution);
