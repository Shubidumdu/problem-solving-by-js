import doTests from '../../do.test';

// 불량 사용자 - 프로그래머스 lv.3
// 재귀와 관련된 문제를 많이 풀어봐야 핟 듯.
// 진짜 Set로 억지로 억지로 중복 체크하면서 풀었다.

const inputs = [
  [
    ['frodo', 'fradi', 'crodo', 'abc123', 'frodoc'],
    ['fr*d*', 'abc1**'],
  ],
  [
    ['frodo', 'fradi', 'crodo', 'abc123', 'frodoc'],
    ['*rodo', '*rodo', '******'],
  ],
  [
    ['frodo', 'fradi', 'crodo', 'abc123', 'frodoc'],
    ['fr*d*', '*rodo', '******', '******'],
  ],
];

const results = [2, 2, 3];

const isBanned = (user, banned) => {
  if (user.length !== banned.length) return false;
  let result = true;
  [...user].forEach((char, idx) => {
    if (!result) return;
    if (banned[idx] === '*') return;
    if (char !== banned[idx]) result = false;
  });
  return result;
};

const solution = (user_id, banned_id) => {
  const result = new Set();

  const dfs = (users, bans, values, idx) => {
    if (idx >= bans.length) {
      result.add(values.sort().toString());
      return;
    }
    const filtered = users.filter((id) => isBanned(id, bans[idx]));
    filtered.forEach((id) => {
      const temp = [...users];
      const id_idx = users.indexOf(id);
      temp.splice(id_idx, 1);
      dfs(temp, bans, [...values, id], idx + 1);
    });
  };

  dfs(user_id, banned_id, [], 0);

  return result.size;
};

doTests(inputs, results, solution);
