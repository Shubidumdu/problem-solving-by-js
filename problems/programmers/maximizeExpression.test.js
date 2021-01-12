import doTests from '../../do.test';

// 수식 최대화 - 프로그래머스 lv.2

const inputs = [['100-200*300-500+20'], ['50*6-3*2']];
const results = [60420, 300];

const getArrayFromExpression = (expression) => {
  const result = expression
    .split(/(\*)/)
    .reduce((prev, val) => [...prev, ...val.split(/(\+)/)], [])
    .reduce((prev, val) => [...prev, ...val.split(/(\-)/)], []);
  return result;
};

const calculateBySequence = (seq, expressionArray) => {
  const results = seq.reduce((prev, sign, idx) => {
    const calculated = [];
    const temp = prev;
    const calcResult = prev.reduce((prev, val, idx) => {
      if (calculated.includes(idx)) return prev;
      if (val === sign) {
        calculated.push(idx - 1, idx + 1);
        const before = prev.pop();
        const newValue = eval(`${before}${sign}${temp[idx + 1]}`).toString();
        return [...prev, newValue];
      }
      return [...prev, val];
    }, []);
    return calcResult;
  }, expressionArray);
  return results[0];
};

const sequences = [
  ['+', '-', '*'],
  ['+', '*', '-'],
  ['-', '+', '*'],
  ['-', '*', '+'],
  ['*', '+', '-'],
  ['*', '-', '+'],
];

const solution = (expression) => {
  const arr = getArrayFromExpression(expression);
  const results = sequences
    .map((seq) => calculateBySequence(seq, arr))
    .map((string) => Math.abs(parseInt(string)));

  return Math.max(...results);
};

doTests(inputs, results, solution);
