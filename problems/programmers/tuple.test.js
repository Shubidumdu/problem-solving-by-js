import doTests from '../../do.test';

// 튜플 - 프로그래머스 lv.2

const inputs = [
  ['{{2},{2,1},{2,1,3},{2,1,3,4}}'],
  ['{{1,2,3},{2,1},{1,2,4,3},{2}}'],
  ['{{20,111},{111}}'],
  ['{{123}}'],
  ['{{4,2,3},{3},{2,3,4,1},{2,3}}'],
];
const results = [[2, 1, 3, 4], [2, 1, 3, 4], [111, 20], [123], [3, 2, 4, 1]];

// replaceAll 폴리필
if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function (str, newStr) {
    if (
      Object.prototype.toString.call(str).toLowerCase() === '[object regexp]'
    ) {
      return this.replace(str, newStr);
    }
    return this.replace(new RegExp(str, 'g'), newStr);
  };
}

const solution = (s) => {
  const counts = {};
  let parsed = '';
  parsed = s.replaceAll('{', '').replaceAll('}', '').split(',');
  parsed.forEach((number) => {
    if (counts[number] >= 0) counts[number] += 1;
    else counts[number] = 0;
  });
  const answer = Object.entries(counts)
    .sort(([a_idx, a_val], [b_idx, b_val]) => b_val - a_val)
    .map((val, count) => parseInt(val));

  return answer;
};

doTests(inputs, results, solution);
