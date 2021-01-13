import doTests from '../../do.test';

// 멀리 뛰기 - 프로그래머스 lv.3

const inputs = [[4], [3]];
const results = [5, 3];

// 또보나치 수열이다.

const solution = (n) => {
  const arr = [1, 1];
  if (n < 2) return arr[n];

  let idx = 1;
  while (idx < n) {
    arr.push((arr[idx] + arr[idx - 1]) % 1234567);
    idx++;
  }

  return arr[n];
};

doTests(inputs, results, solution);
