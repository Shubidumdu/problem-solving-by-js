import doTests from '../../do.test';

const inputs = [
  [1000, [1200, 1000, 1100, 1200, 900, 1000, 1500, 900, 750, 1100]],
  [1500, [1500, 1400, 1300, 1200]],
];
const results = [2150, 1500];

const solution = (k, rates) => {
  let won = k;
  let dollar = 0;

  const checkFloor = (i) => {
    if (i === 0) {
      if (rates[i + 1] >= rates[i]) return true;
      return false;
    } else if (i === rates.length - 1) {
      if (rates[i - 1] >= rates[i]) return true;
      return false;
    } else {
      if (rates[i + 1] >= rates[i] && rates[i - 1] >= rates[i]) return true;
      return false;
    }
  };

  const checkCeil = (i) => {
    if (i === 0) {
      if (rates[i + 1] <= rates[i]) return true;
      return false;
    } else if (i === rates.length - 1) {
      if (rates[i - 1] <= rates[i]) return true;
      return false;
    } else {
      if (rates[i + 1] <= rates[i] && rates[i - 1] <= rates[i]) return true;
      return false;
    }
  };

  const canBuy = (i) => {
    if (rates[i] > won) return false;
    return true;
  };

  for (let i = 0; i < rates.length; i++) {
    const rate = rates[i];
    // 바닥이면 사고
    if (checkFloor(i)) {
      if (!dollar && canBuy(i)) {
        dollar = rate;
        won -= rate;
      }
    }
    // 천장이면 판다
    else if (checkCeil(i)) {
      if (dollar) {
        won += rate;
        dollar = 0;
      }
    } else {
      continue;
    }
  }

  return won + dollar;
};

doTests(inputs, results, solution);
