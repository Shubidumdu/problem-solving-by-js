import doTests from '../../do.test';

// 길 찾기 게임 - 프로그래머스 lv.3

const inputs = [
  [
    [
      [5, 3],
      [11, 5],
      [13, 3],
      [3, 5],
      [6, 1],
      [1, 3],
      [8, 6],
      [7, 2],
      [2, 2],
    ],
  ],
];
const results = [
  [
    [7, 4, 6, 9, 1, 8, 5, 2, 3],
    [9, 6, 5, 8, 1, 4, 3, 2, 7],
  ],
];

const pre = [];
const post = [];

const preOrder = (node) => {
  pre.push(node.val);
  if (node.left) preOrder(node.left);
  if (node.right) preOrder(node.right);
};

const postOrder = (node) => {
  if (node.left) postOrder(node.left);
  if (node.right) postOrder(node.right);
  post.push(node.val);
};

// addNode는 재귀함수로, 최초 루트부터 출발해 부모를 탐색한다.
// 해당 과정을 모든 노드에 대해 재귀적으로 반복하면 트리가 완성된다.
const addNode = (parent, child) => {
  // 만약 x값이 부모보다 작고
  if (parent.x > child.x) {
    // 부모의 left가 비어있다면
    if (!parent.left) {
      // 본인이 그 자리를 차지하고
      parent.left = child;
    } else {
      // 아니라면 그 다음 세대 부모를 찾는다.
      addNode(parent.left, child);
    }
    // 반면 만약 x값이 부모보다 크고
  } else {
    // 부모의 right가 비어있다면
    if (!parent.right) {
      // 본인이 그 자리를 차지하고
      parent.right = child;
    } else {
      // 아니라면 그 다음 세대 부모를 찾는다.
      addNode(parent.right, child);
    }
  }
};

// 트리를 만든다.
const makeTree = (sortedNodes) => {
  // 먼저 루트 노드를 지정한다.
  const root = sortedNodes[0];
  // 이후 각각의 노드들에 대해 이진 트리 내 제 위치를 찾아가게끔 해주어야 한다.
  sortedNodes.forEach((node, idx) => {
    if (!idx) return;
    addNode(root, node);
  });

  return root;
};

const solution = (nodeinfo) => {
  // 먼저 노드에 번호를 붙인다.
  const nodes = nodeinfo.map(([x, y], idx) => ({ x, y, val: idx + 1 }));
  // 위에서부터 차례차례 뻗어나오는 트리이므로 Y기준으로 역순 정렬한다.
  const sorted = nodes.sort(
    ({ x: x1, y: y1 }, { x: x2, y: y2 }) => y2 - y1 || x1 - x2,
  );
  // 트리를 만든다. 사실 상 이것만 하면 푸는 문젠데 이게 어렵다.
  const rootNode = makeTree(sorted);

  // 만든 트리에 대해 각각 전위순회 / 후위순회 해준다.
  preOrder(rootNode);
  postOrder(rootNode);

  return [pre, post];
};

doTests(inputs, results, solution);
