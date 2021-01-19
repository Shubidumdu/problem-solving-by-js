import doTests from '../../do.test';

// 보석쇼핑 - 프로그래머스 lv.3
// 우여곡절이 참 많은 문제다..
// 투포인터 알고리즘을 쓰되, 단순히 Array로 해결하려고 하면은 별 메서드를 다 써도 시간 초과가 난다.
// 그래서 울며 겨자먹기로 Map을 써야한다.. 어째 많이 억울한 문제.

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

// 투포인터 알고리즘
const solution = (gems) => {
  let start = 0,
    end = 0;
  let allGemsCount = new Set(gems).size;
  let answer = null;
  const map = new Map();
  while (true) {
    console.log(map, answer, start, end);
    if (map.size === allGemsCount) {
      if (!answer) answer = [start + 1, end];
      if (end - start - 1 < answer[1] - answer[0]) answer = [start + 1, end];
      const shiftCount = map.get(gems[start]);
      if (shiftCount === 1) map.delete(gems[start]);
      else map.set(gems[start], shiftCount - 1);
      start += 1;
    } else {
      if (end > gems.length - 1) break;
      const pushCount = map.get(gems[end]);
      if (pushCount) map.set(gems[end], pushCount + 1);
      else map.set(gems[end], 1);
      end += 1;
    }
  }

  return answer;
};

doTests(inputs, results, solution);
