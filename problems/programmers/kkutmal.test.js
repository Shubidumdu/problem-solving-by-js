import doTests from '../../do.test';

const inputs = [[2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']]];
const results = [[1, 3]];

const checkDefeat = (words, idx, cache) => {
  if (!idx) return false;
  const before = words[idx - 1];
  const now = words[idx];
  if (now.length < 2) return true;
  if (before[before.length - 1] !== now[0]) return true;
  if (cache.includes(now)) return true;
  return false;
};

const solution = (n, words) => {
  const cache = [];
  let turn = 1;
  let counts = 1;
  let answer = [0, 0];
  words.forEach((word, idx) => {
    if (answer[0]) return;
    if (counts > n) {
      turn += 1;
      counts = 1;
    }
    if (checkDefeat(words, idx, cache)) answer = [counts, turn];
    else cache.push(word);
    counts += 1;
  });

  return answer;
};

doTests(inputs, results, solution);
