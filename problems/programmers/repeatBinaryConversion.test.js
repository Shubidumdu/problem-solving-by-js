import doTests from '../../do.test';

// 이진 변환 반복하기 - 프로그래머스 lv.2

const inputs = [['110010101001'], ['01110'], ['1111111']];
const results = [
  [3, 8],
  [3, 3],
  [4, 1],
];

const deleteZero = (string) => {
  let zeroCount = 0;
  const result = [...string].reduce((prev, char) => {
    if (char === '0') {
      zeroCount += 1;
      return prev;
    }
    return prev + char;
  }, '');
  return [zeroCount, result];
};

const lengthToBinary = (string) => {
  return string.length.toString(2);
};

const solution = (s) => {
  let number = s;
  let answer = [0, 0];

  while (number !== '1') {
    const [zeroCount, result] = deleteZero(number);
    number = lengthToBinary(result);
    answer[1] += zeroCount;
    answer[0] += 1;
  }

  return answer;
};

doTests(inputs, results, solution);
