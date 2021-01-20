import doTests from '../../do.test';

// 소수 만들기 - 프로그래머스 lv.2

const inputs = [[[1, 2, 3, 4]], [[1, 2, 7, 6, 4]]];
const results = [1, 4];

const checkDecimal = (n) => {
  for (let i = 2; i ** 2 <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const solution = (nums) => {
  let answer = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const total = nums[i] + nums[j] + nums[k];
        if (checkDecimal(total)) answer += 1;
      }
    }
  }

  return answer;
};

doTests(inputs, results, solution);
