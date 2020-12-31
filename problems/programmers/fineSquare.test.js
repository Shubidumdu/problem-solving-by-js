import doTests from '../../do.test';

const inputs = [[8, 12]];
const results = [80];

const gcd = (minNum, maxNum) => {
  return minNum % maxNum === 0 ? maxNum : gcd(maxNum, minNum % maxNum);
};

const solution = (w, h) => {
  const area = w * h;
  return area - (w + h - gcd(w, h));
};

doTests(inputs, results, solution);
