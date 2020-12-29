import doTests from '../../do.test';

const inputs = [[[2, 1, 3, 4, 1]], [[5, 0, 2, 7]]];
const results = [
  [2, 3, 4, 5, 6, 7],
  [2, 5, 7, 9, 12],
];

const solution = (numbers) => {
  const sumAll = numbers.reduce((prev, first, firstIdx) => {
    const sums = numbers.reduce((prev, second, secondIdx) => {
      if (secondIdx === firstIdx) return prev;
      return [...prev, first + second];
    }, []);
    return [...prev, ...sums];
  }, []);

  const set = new Set(sumAll);
  const answer = Array.from(set).sort((a, b) => a - b);

  return answer;
};

doTests(inputs, results, solution);
