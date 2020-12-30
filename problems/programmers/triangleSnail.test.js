import doTests from '../../do.test';

const inputs = [4, 5, 6];
const results = [
  [1, 2, 9, 3, 10, 8, 4, 5, 6, 7],
  [1, 2, 12, 3, 13, 11, 4, 14, 15, 10, 5, 6, 7, 8, 9],
  [1, 2, 15, 3, 16, 14, 4, 17, 21, 13, 5, 18, 19, 20, 12, 6, 7, 8, 9, 10, 11],
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
