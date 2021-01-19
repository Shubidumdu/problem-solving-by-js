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
  [3, 6],
];

const solution = (gems) => {
  const allGemsCount = new Set(gems).size;
  // const gemMaps = [];
  // let startGem = '';
  // const gemMap = new Map();
  // gems.forEach((gem, idx) => {
  //   if (!idx) {
  //     startGem = gem;
  //   }
  //   if (gemMap.size === allGemsCount) {
  //     if(startGem === gem) {
  //       const temp = new Map(gemMap);
  //       temp.set(gem, idx + 1);
  //       gemMaps.push(temp);
  //     }
  //   }
  // });
  const gemMap = gems.reduce((prev, gem, idx) => {
    if (prev.size === allGemsCount) return prev;
    prev.set(gem, idx + 1);
    return prev;
  }, new Map());

  const positions = [...gemMap.values()].sort((a, b) => a - b);
  const answer = [positions[0], positions[positions.length - 1]];

  return answer;
};

doTests(inputs, results, solution);
