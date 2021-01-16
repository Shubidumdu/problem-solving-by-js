import doTests from '../../do.test';

const inputs = [
  [1, 1, 5, ['08:00', '08:01', '08:02', '08:03']],
  [2, 10, 2, ['09:10', '09:09', '08:00']],
  [2, 1, 2, ['09:00', '09:00', '09:00', '09:00']],
  [1, 1, 5, ['00:01', '00:01', '00:01', '00:01', '00:01']],
  [1, 1, 1, ['23:59']],
  [
    10,
    60,
    45,
    [
      '23:59',
      '23:59',
      '23:59',
      '23:59',
      '23:59',
      '23:59',
      '23:59',
      '23:59',
      '23:59',
      '23:59',
      '23:59',
      '23:59',
      '23:59',
      '23:59',
      '23:59',
      '23:59',
    ],
  ],
];
const results = ['09:00', '09:09', '08:59', '00:00', '09:00', '18:00'];

const parseTime = (time) => {
  return time.split(':').map((str) => parseInt(str));
};

const addMinutes = (time, minute) => {
  let after = [...time];
  after[1] += minute;
  if (after[1] >= 60) {
    after[0] += 1;
    after[1] -= 60;
  }
  if (after[1] < 0) {
    after[0] -= 1;
    after[1] += 60;
  }
  return after;
};

const getArrivals = (bus_count, time_distance) => {
  let counts = 0;
  let time = [9, 0];
  const arrivals = [];
  while (counts < bus_count) {
    arrivals.push(time);
    time = addMinutes(time, time_distance);
    counts += 1;
  }

  return arrivals;
};

const parseToString = (time) => {
  return time
    .map((number) => {
      const str = number.toString();
      if (str.length < 2) return '0' + str;
      return str;
    })
    .join(':');
};

const makeAnswer = (bus_result, arrivals, maximum) => {
  const last_bus = bus_result.pop();
  const last_time = arrivals.pop();
  if (last_bus.length < maximum) {
    return parseToString(last_time);
  }
  const last_crew = last_bus.pop();
  const answer_time = addMinutes(last_crew, -1);
  return parseToString(answer_time);
};

const solution = (bus_count, time_distance, maximum, timetable) => {
  let sortedTimeTable = timetable
    .map((time) => parseTime(time))
    .sort(([h1, m1], [h2, m2]) => h1 - h2 || m1 - m2);
  const arrivals = getArrivals(bus_count, time_distance);
  const bus_result = arrivals.map(([arr_hour, arr_minute]) => {
    const popIdx = [];
    const crew_result = sortedTimeTable.reduce(
      (prev, [crew_hour, crew_minute], idx) => {
        if (prev.length === maximum) return prev;
        if (arr_hour > crew_hour) {
          popIdx.push(idx);
          return [...prev, [crew_hour, crew_minute]];
        }
        if (arr_hour === crew_hour && arr_minute >= crew_minute) {
          popIdx.push(idx);
          return [...prev, [crew_hour, crew_minute]];
        }
        return prev;
      },
      [],
    );
    sortedTimeTable = sortedTimeTable.filter(
      (val, idx) => !popIdx.includes(idx),
    );
    return crew_result;
  });

  const answer = makeAnswer(bus_result, arrivals, maximum);

  return answer;
};

doTests(inputs, results, solution);
