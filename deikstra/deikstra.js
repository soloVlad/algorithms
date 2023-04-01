const graph = {
  'start': {
    'a': 6,
    'b': 2
  },
  'a': {
    'finish': 1
  },
  'b': {
    'a': 3,
    'finish': 5
  },
  'finish': {}
};

const costs = {
  'a': 6,
  'b': 2,
  'finish': Infinity
};

const parents = {
  'a': 'start',
  'b': 'start',
  'finish': null
};

const processed = [];


let node = findLowestCostNode(costs, processed);
while (node) {
  const cost = costs[node];
  const neighbors = graph[node];

  for (const [neighbor, neighborCost] of Object.entries(neighbors)) {
    const newCost = cost + neighborCost;
    if (newCost < costs[neighbor]) {
      costs[neighbor] = newCost;
      parents[neighbor] = node;
    }
  }
  processed.push(node);
  node = findLowestCostNode(costs, processed);
}


console.log(costs['finish']);
const shortestPath = restoreShortestPath(parents);
console.log(shortestPath.join(' <- '));


function findLowestCostNode(costs, processed) {
  let lowestCost = Infinity;
  let lowestCostNode = null;
  for (const [node, cost] of Object.entries(costs)) {
    if (processed.includes(node)) continue;
    if (cost < lowestCost) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  }

  return lowestCostNode;
}

function restoreShortestPath(parents) {
  let startNode = 'finish';
  const path = [startNode];
  while (startNode !== 'start') {
    const parent = parents[startNode];
    path.push(parent);
    startNode = parent;
  }

  return path;
}