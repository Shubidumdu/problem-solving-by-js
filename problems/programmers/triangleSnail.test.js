import doTests from '../../do.test';

// 이거 input이 100인 경우에 적용하면 자꾸 어느 순간 arrays가 []이 되고, `circuit`이 1이 되어버리는데 왜 그러는지 모르겠음;;;;

const inputs = [[1], [2], [3], [4], [5], [6], [100]];

const results = [
  [1],
  [1, 2, 3],
  [1, 2, 6, 3, 4, 5],
  [1, 2, 9, 3, 10, 8, 4, 5, 6, 7],
  [1, 2, 12, 3, 13, 11, 4, 14, 15, 10, 5, 6, 7, 8, 9],
  [1, 2, 15, 3, 16, 14, 4, 17, 21, 13, 5, 18, 19, 20, 12, 6, 7, 8, 9, 10, 11],
];

let start;
let end;

const solution = (n) => {
  const arrays = [
    ...Array(n)
      .fill()
      .map(() => []),
  ];

  end = (n * (n + 1)) / 2;
  start = 1;
  let circuit = 0;

  while (start <= end) {
    padLeftDown(arrays, circuit);
    padRow(arrays, circuit);
    padLeftUp(arrays, circuit);
    circuit += 1;
  }

  const answer = arrays.flat();
  return answer;
};

const isFull = (array, index) => {
  return array.length === index + 1;
};

const padLeftDown = (arrays, circuit) => {
  console.log(arrays, circuit);
  arrays.forEach((arr, index) => {
    if (start > end) return;
    if (isFull(arr, index)) return;
    arr.splice(circuit, 0, start);
    start += 1;
  });
};

const padRow = (arrays, circuit) => {
  let startIndex = circuit + 1;
  const array = arrays[arrays.length - circuit - 1];
  const index = arrays.length - circuit - 1;
  while (!isFull(array, index)) {
    array.splice(startIndex, 0, start);
    startIndex += 1;
    start += 1;
    if (start > end) return;
  }
};

const padLeftUp = (arrays, circuit) => {
  let startIndex = arrays.length - circuit - 1;
  arrays.forEach((_, idx) => {
    const index = arrays.length - idx - 1;
    const arr = arrays[index];
    if (isFull(arr, index)) {
      startIndex -= 1;
      return;
    }
    arr.splice(startIndex, 0, start);
    startIndex -= 1;
    start += 1;
    if (start > end) return;
  });
};

doTests(inputs, results, solution);
