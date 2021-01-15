import doTests from '../../do.test';

const inputs = [
  [2, ['Jeju', 'Pangyo', 'NewYork', 'newyork']],
  [0, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA']],
];
const results = [16, 25];

// 캐시 - 프로그래머스 lv.2

const solution = (cacheSize, cities) => {
  let answer = 0;
  const cacheTime = [...Array(cacheSize)].map(() => -1);
  const cache = [...Array(cacheSize)].map(() => '');
  cities.forEach((city, idx) => {
    const upper = city.toUpperCase();
    const cacheIdx = cache.indexOf(upper);
    // 캐시 있는 경우
    if (cacheIdx !== -1) {
      answer += 1;
      cacheTime[cacheIdx] = idx;
      return;
    }
    // 캐시 없을 경우
    const latestIdx = cacheTime.indexOf(Math.min(...cacheTime));
    cache[latestIdx] = upper;
    cacheTime[latestIdx] = idx;
    answer += 5;
  });

  return answer;
};

doTests(inputs, results, solution);
