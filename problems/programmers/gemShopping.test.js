import doTests from '../../do.test';

const inputs = [
  [['DIA', 'RUBY', 'RUBY', 'DIA', 'DIA', 'EMERALD', 'SAPPHIRE', 'DIA']],
  [['AA', 'AB', 'AC', 'AA', 'AC']],
  [['XYZ', 'XYZ', 'XYZ']],
  [['ZZZ', 'YYY', 'NNNN', 'YYY', 'BBB']],
  [['A', 'A', 'A', 'C', 'C', 'A', 'B', 'B', 'A']],
  [['A', 'B', 'B', 'B', 'B', 'A', 'A', 'A', 'B', 'B', 'C']],
  [['A', 'B', 'B', 'C', 'A']],
  [['A', 'D', 'B', 'B', 'D', 'C', 'A']],
];
const results = [
  [3, 7],
  [1, 3],
  [1, 1],
  [1, 5],
  [5, 7],
  [8, 11],
  [3, 5],
  [4, 7],
];


// 투포인터 알고리즘 쓰기
const solution = (gems) => {
  let start = 0, end = 0;
  let allGemsCount = new Set(gems).size;
  let answer = [0, 0];
  while(true) {
    if (start === gems.length - 1 && end === gems.length - 1) break;
    const sliced = gems.slice(start, end);
    if()
  }
};

doTests(inputs, results, solution);
