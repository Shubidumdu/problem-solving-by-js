// 2. 펠린드롬(앞으로 읽으나 뒤로 읽으나 동일한 문자: madam)를 찾는 함수를 만들어 보세요.
// (input: 문자열, output: true/false)

// input => madam
// output => true

// input => abcde
// output => false

// input => aabbaa
// output => true

const solution = (input) => {
  let answer = true;

  if (input.length % 2) {
    // 문자열 길이가 홀수
    [...input].forEach((char, idx) => {
      if (char !== input[input.length - idx - 1]) answer = false;
    });
  } else {
    // 문자열 길이가 짝수
  }

  return answer;
};
