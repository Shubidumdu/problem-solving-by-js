import doTests from '../../do.test';

const inputs = [['3people unFollowed me'], ['for the last week']];
const results = ['3people Unfollowed Me', 'For The Last Week'];

// JadenCase 문자열 만들기 - 프로그래머스 lv.2

const convertJadenCase = (word) => {
  const result = [...word].reduce((prev, char, idx) => {
    if (!idx) return prev + char.toUpperCase();
    return prev + char.toLowerCase();
  }, '');

  return result;
};

const solution = (values) => {
  const answer = values.split(' ').map(convertJadenCase).join(' ');

  return answer;
};

doTests(inputs, results, solution);
