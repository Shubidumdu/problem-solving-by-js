import doTests from '../../do.test';

const inputs = [[2], [3], [4]];
const results = [2, 3, 5];

const solution = (n) => {
  const fibos = [1, 1];
  if (fibos[n]) return fibos[n];
  let index = 2;
  while (index <= n) {
    fibos.push(
      fibos[fibos.length - 2] + (fibos[fibos.length - 1] % 1_000_000_007),
    );
    index += 1;
  }

  return fibos[n] % 1_000_000_007;
};

doTests(inputs, results, solution);
