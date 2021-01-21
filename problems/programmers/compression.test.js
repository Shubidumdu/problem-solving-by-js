import doTests from '../../do.test';

// 압축 - 프로그래머스 lv.2
// 카카오 문제 특 -> 로직 상 쉬운거 같아 보이는데 구현하려면 열 받게 만들어 놓았다.

const inputs = [['KAKAO'], ['TOBEORNOTTOBEORTOBEORNOT'], ['ABABABABABABABAB']];
const results = [
  [11, 1, 27, 15],
  [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34],
  [1, 2, 27, 29, 28, 31, 30],
];

const initDict = () => {
  return [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
};

const checkDict = (dict, target) => {
  const idx = dict.indexOf(target);
  return idx + 1;
};

const solution = (msg) => {
  const dict = initDict();
  let successed = '';
  const answer = [];
  [...Array(msg.length).keys()].forEach((startIdx) => {
    if (successed.length > startIdx) return;
    let num = -1;
    let sliceEnd = 1;
    while (true) {
      const target = msg.slice(startIdx, startIdx + sliceEnd);
      const dictNum = checkDict(dict, target);
      if (!dictNum) {
        dict.push(target);
        successed += msg.slice(startIdx, startIdx + sliceEnd - 1);
        break;
      }
      if (startIdx + sliceEnd > msg.length) {
        successed += msg.slice(startIdx, startIdx + sliceEnd - 1);
        break;
      }
      num = dictNum;
      sliceEnd++;
    }
    answer.push(num);
  });

  return answer;
};

doTests(inputs, results, solution);
