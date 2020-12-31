import doTests from '../../do.test';

const inputs = [['CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']]];
const results = [2];

const solution = (skill, skill_trees) => {
  const answer = skill_trees.reduce((prev, tree, idx) => {
    // [2, 0, 3], [0, 1, 3], [2, 3, -1], [-1, 0, 1];
    const skillIndexes = [...skill].map((char) => tree.indexOf(char));

    const isPossible = skillIndexes.reduce((prev, val, idx) => {
      const next = skillIndexes[idx + 1];
      if (!prev) return false;
      if (next === undefined) return true;
      if (next === -1) return true;
      if (val === -1) {
        if (next === -1) return true;
        else return false;
      }
      if (val < next) {
        return true;
      }
      return false;
    }, true);

    if (isPossible) return prev + 1;
    return prev;
  }, 0);

  return answer;
};

doTests(inputs, results, solution);
