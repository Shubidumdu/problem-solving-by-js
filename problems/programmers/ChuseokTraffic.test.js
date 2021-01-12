import doTests from '../../do.test';

// 추석 트래픽 - 프로그래머스 lv.3

const inputs = [
  [['2016-09-15 01:00:04.001 2.0s', '2016-09-15 01:00:07.000 2s']],
  [['2016-09-15 01:00:04.002 2.0s', '2016-09-15 01:00:07.000 2s']],
  [
    [
      '2016-09-15 20:59:57.421 0.351s',
      '2016-09-15 20:59:58.233 1.181s',
      '2016-09-15 20:59:58.299 0.8s',
      '2016-09-15 20:59:58.688 1.041s',
      '2016-09-15 20:59:59.591 1.412s',
      '2016-09-15 21:00:00.464 1.466s',
      '2016-09-15 21:00:00.741 1.581s',
      '2016-09-15 21:00:00.748 2.31s',
      '2016-09-15 21:00:00.966 0.381s',
      '2016-09-15 21:00:02.066 2.62s',
    ],
  ],
];
const results = [1, 2, 7];

const makeOneSecond = (date) => {
  return [date, new Date(date.getTime() + 999)];
};

const checkIn = ([start, end], [start2, end2]) => {
  if (start <= start2) {
    if (start2 <= end) return true;
  }
  if (start2 <= start) {
    if (start <= end2) return true;
  }
  return false;
};

const solution = (lines) => {
  const timelines = lines.map((string) => {
    const [date, time, seconds] = string.split(' ');
    const end = new Date(`${date} ${time}`);
    const start = new Date(
      end.getTime() - parseInt(seconds.slice(0, -1) * 1000) + 1,
    );
    return [start, end];
  });

  let answer = 0;
  let counts = 0;

  timelines.forEach(([target_start, target_end]) => {
    counts = 0;
    let pointer = makeOneSecond(target_start);
    timelines.forEach((target) => {
      if (checkIn(pointer, target)) counts += 1;
    });
    answer = Math.max(answer, counts);
    counts = 0;
    pointer = makeOneSecond(target_end);
    timelines.forEach((target) => {
      if (checkIn(pointer, target)) counts += 1;
    });
    answer = Math.max(answer, counts);
  });

  return answer;
};

doTests(inputs, results, solution);
