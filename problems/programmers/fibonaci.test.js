import doTests from '../../do.test';

// 피보나치 수 - 프로그래머스 lv.2
// 풀 때마다 로직이 바뀌는 MAGIC,,,**

const inputs = [[3], [5]];
const results = [2, 5];

const solution = (n) => {
  const fibos = [0, 1];
  if (n < 2) return fibos[n];
  let pointer = 2;
  while (pointer <= n) {
    fibos[pointer] = (fibos[pointer - 2] + fibos[pointer - 1]) % 1234567;
    pointer += 1;
  }

  return fibos[n];
};

doTests(inputs, results, solution);
