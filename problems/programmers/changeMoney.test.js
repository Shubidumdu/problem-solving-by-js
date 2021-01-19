import doTests from '../../do.test';

// 거스름돈 - 프로그래머스 lv.3
// 아 진짜 골아픈 DP 문제...
// 단순히 재귀로 풀면 풀리는데 효율성에서 무조건 빠꾸를 먹는다.
// 그래서 DP로 풀어야 하는데, 해설을 봐도 뭔 개소린가 싶다.

const inputs = [[5, [1, 2, 5]]];
const results = [4];

const solution = (n, money) => {
  const dp = [...Array(n + 1)].map(() => 0);
  dp[0] = 1;

  money.forEach((m, idx) => {
    for (let i = m; i < n + 1; i++) {
      dp[i] += dp[i - m];
    }
  });

  let answer = dp[n];

  return answer % 1_000_000_007;
};

doTests(inputs, results, solution);
