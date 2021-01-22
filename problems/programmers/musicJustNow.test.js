import doTests from '../../do.test';

// 방금 그곡 - 프로그래머스 lv.2
// 오 씟,,;; 구현이 너무 귀찮다.

const inputs = [
  ['ABCDEFG', ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF']],
  [
    'CC#BCC#BCC#BCC#B',
    ['03:00,03:30,FOO,CC#B', '04:00,04:08,BAR,CC#BCC#BCC#B'],
  ],
  ['ABC', ['12:00,12:14,HELLO,C#DEFGAB', '13:00,13:05,WORLD,ABCDEF']],
  ['ABC', ['00:00,00:05,HI,ABC#ABC']],
  ['ABC', ['00:00,00:06,HI,ABC#ABC']],
];
const results = ['HELLO', 'FOO', 'WORLD', '(None)', 'HI'];

const timeToMin = (time) => {
  const [hour, minute] = time.split(':');
  return parseInt(minute) + parseInt(hour) * 60;
};

const makeRemember = (m) => {
  const remember = [];
  for (let i = 0; i < m.length; i++) {
    if (m[i] === '#') {
      continue;
    }
    if (m[i + 1] === '#') {
      remember.push(m[i] + '#');
      continue;
    }
    remember.push(m[i]);
  }

  return remember;
};

const parseInfo = (musicinfos) => {
  const infos = musicinfos.map((info) => {
    const [start, end, title, melody] = info.split(',');
    return { start, end, title, melody: makeRemember(melody) };
  });

  return infos;
};

const makeSongs = (infos) => {
  const result = infos.map(({ start, end, title, melody }) => {
    let minutes = timeToMin(end) - timeToMin(start);
    const song = [];
    for (let i = 0; i < minutes; i++) {
      song.push(melody[i % melody.length]);
    }
    return [title, song, minutes, start];
  });

  return result;
};

const getAllIdx = (arr, val) => {
  const indexes = [];
  let i = -1;
  while ((i = arr.indexOf(val, i + 1)) != -1) {
    indexes.push(i);
  }
  return indexes;
};

const compareMusic = (remember, [title, song, minutes, start]) => {
  const indices = [];
  let startIdx = song.indexOf(remember[0], 0);
  while (startIdx !== -1) {
    indices.push(startIdx);
    startIdx = song.indexOf(remember[0], startIdx + 1);
  }
  let result = false;
  indices.forEach((startIdx) => {
    for (let i = 0; i < remember.length + 1; i++) {
      if (i === remember.length) result = true;
      if (remember[i] !== song[i + startIdx]) break;
    }
  });
  return result;
};

const solution = (m, musicinfos) => {
  const remember = makeRemember(m);
  const infos = parseInfo(musicinfos);
  const songs = makeSongs(infos);

  const possibles = [];

  songs.forEach((song) => {
    if (compareMusic(remember, song)) possibles.push(song);
  });

  if (!possibles.length) return '(None)';
  if (possibles.length === 1) return possibles[0][0];

  const sorted = possibles.sort(
    ([title1, song1, minute1, start1], [title2, song2, minute2, start2]) => {
      return minute2 - minute1 || start1 - start2;
    },
  );

  return sorted[0][0];
};

doTests(inputs, results, solution);
