// 1. 1~100 까지의 수열이 있다.
// 이 수열을 randomize 시킨 상태에서 숫자 하나를 뺐다.
// 빠진 숫자를 찾는 방법은?
// (input: 99개의 randomize 수열, output: 빠진 숫자)

// input [1, .... , 100]
// output 7

const solution = (input) => {
  const sorted = input.sort((a, b) => a - b);
  let check = 1;
  let answer;
  sorted.forEach((num) => {
    if (answer) return;
    if (num !== check) {
      answer = check;
      return;
    }
    check++;
  });
  return answer;
};
