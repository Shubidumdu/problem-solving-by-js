import doTests from '../../do.test';

const inputs = [
  ['ABCDEFG', ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF']],
  [
    'CC#BCC#BCC#BCC#B',
    ['03:00,03:30,FOO,CC#B', '04:00,04:08,BAR,CC#BCC#BCC#B'],
  ],
  ['ABC', ['12:00,12:14,HELLO,C#DEFGAB', '13:00,13:05,WORLD,ABCDEF']],
];
const results = ['HELLO', 'FOO', 'WORLD'];

const timeToMin = (time) => {
  const [hour, minute] = time.split(':');
  return parseInt(minute) + parseInt(hour) * 60;
};

const solution = (m, musicinfos) => {
  const infos = musicinfos.map((info) => {
    const [start, end, title, melody] = info.split(',');
    return { start, end, title, melody };
  });

  const songs = infos.map(({ start, end, title, melody }) => {
    const minutes = timeToMin(end) - timeToMin(start);
    let song = [];
    for (let i = 0; i < minutes; i++) {
      if (melody[i % melody.length] === '#') {
        i--;
        continue;
      }
      if (melody[(i + 1) % melody.length] === '#') {
        song.push(melody[i % melody.length]) + '#';
      }
      song.push(melody[i % melody.length]);
    }
    return [title, song, minutes, start];
  });

  const possibles = [];

  songs.forEach(([title, song, minutes, start]) => {
    if (song.includes(m)) possibles.push([title, minutes, start]);
  });

  if (!possibles.length) return '(None)';
  if (possibles.length === 1) return possibles[0][0];

  const longests = possibles.sort(
    ([title1, minutes1, start1], [title2, minutes2, start2]) => {
      return minutes2 - minutes1 || start1 - start2;
    },
  );

  return longests[0][0];
};

doTests(inputs, results, solution);
