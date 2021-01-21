import doTests from '../../do.test';

// 파일명 정렬 - 프로그래머스 lv.2
// 말그대로 구현에 힘쓰는 문제.

const inputs = [
  [
    [
      'img12.png',
      'img10.png',
      'img02.png',
      'img1.png',
      'IMG01.GIF',
      'img2.JPG',
    ],
  ],
  [
    [
      'F-5 Freedom Fighter',
      'B-50 Superfortress',
      'A-10 Thunderbolt II',
      'F-14 Tomcat',
    ],
  ],
];
const results = [
  ['img1.png', 'IMG01.GIF', 'img02.png', 'img2.JPG', 'img10.png', 'img12.png'],
  [
    'A-10 Thunderbolt II',
    'B-50 Superfortress',
    'F-5 Freedom Fighter',
    'F-14 Tomcat',
  ],
];

const parseName = (name) => {
  const number = name.match(/[0-9]+/)[0];
  const [head, tail] = name.split(number);
  return [head, number, tail];
};

const compareHead = (head1, head2) => {
  const upper1 = head1.toUpperCase();
  const upper2 = head2.toUpperCase();
  if (upper1 === upper2) return 0;
  if (upper1 < upper2) return -1;
  else return 1;
};

const compareNumber = (number1, number2) => {
  const parsed1 = parseInt(number1);
  const parsed2 = parseInt(number2);
  return parsed1 - parsed2;
};

const solution = (files) => {
  const sorted = files.sort((file1, file2) => {
    const [head1, number1, tail1] = parseName(file1);
    const [head2, number2, tail2] = parseName(file2);
    return compareHead(head1, head2) || compareNumber(number1, number2) || 0;
  });

  return sorted;
};

doTests(inputs, results, solution);
