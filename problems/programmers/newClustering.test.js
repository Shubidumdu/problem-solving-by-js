import doTests from '../../do.test';

// 뉴스 클러스터링 - 프로그래머스 lv.2

const inputs = [
  ['FRANCE', 'french'],
  ['handshake', 'shake hands'],
  ['aa1+aa2', 'AAAA12'],
  ['E=M*C^2', 'e=m*c^2'],
];
const results = [16384, 65536, 43690, 65536];

const makeSet = (str) => {
  const upper = str.toUpperCase();
  return [...upper].reduce((prev, char, idx) => {
    if (!idx) return prev;
    const word = upper[idx - 1] + char;
    if (/[^A-Z]/.test(word)) return prev;
    return [...prev, word];
  }, []);
};

const makeIntersection = (set1, set2) => {
  const tempSet2 = [...set2];
  const result = set1.reduce((prev, val, idx) => {
    const indexOfVal = tempSet2.indexOf(val);
    if (indexOfVal === -1) return prev;
    tempSet2.splice(indexOfVal, 1);
    return [...prev, val];
  }, []);
  return result;
};

const makeUnion = (set1, set2, intersection) => {
  const concat = set1.concat(set2);
  intersection.forEach((val, idx) => {
    const indexOfVal = concat.indexOf(val);
    if (indexOfVal === -1) return;
    concat.splice(indexOfVal, 1);
  });

  return concat;
};

const solution = (str1, str2) => {
  const set1 = makeSet(str1);
  const set2 = makeSet(str2);
  const intersection = makeIntersection(set1, set2);
  const union = makeUnion(set1, set2, intersection);

  if (!intersection.length && !union.length) return 65536;
  const Jaccard = Math.floor((intersection.length / union.length) * 65536);
  return Jaccard;
};

doTests(inputs, results, solution);
