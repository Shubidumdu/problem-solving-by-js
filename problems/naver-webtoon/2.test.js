import doTests from '../../do.test';

const inputs = [
  [420, [0, 900, 0, 200, 150, 0, 30, 50]],
  [100, [245, 317, 151, 192]],
];
const results = [5, 0];

const solution = (money, costs) => {
  const moneys = [];
  const lengths = [];
  const isDone = [];

  costs.forEach((cost, i) => {
    for (let k = 0; k < i; k++) {
      if (isDone[k]) continue;
      if (cost <= moneys[k]) {
        moneys[k] -= cost;
        lengths[k] += 1;
      } else {
        isDone[k] = true;
      }
    }
    if (cost <= money) {
      moneys[i] = money - cost;
      lengths[i] = 1;
      isDone[i] = false;
      return;
    } else {
      moneys[i] = money;
      lengths[i] = 0;
      isDone[i] = true;
    }
  });

  return Math.max.apply(null, lengths);
};

doTests(inputs, results, solution);
