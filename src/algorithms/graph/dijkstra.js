'use strict';

const PriorityQueue = require('../../data_structures/priority_queue');

/**
 * Calculates the shortest paths in a graph to every node from the node s
 * with Dijkstra's algorithm
 *
 * @param {Object} graph An adjacency list representing the graph
 * @param {string} start the starting node
 *
 */
function dijkstra(graph, s) {
  const distance = {};
  const previous = {};
  const q = new PriorityQueue();
  // Initialize
  distance[s] = 0;
  graph.vertices.forEach(function(v) {
    if (v !== s) {
      distance[v] = Infinity;
    }
    q.insert(v, distance[v]);
  });

  let currNode;
  const relax = function(v) {
    const newDistance = distance[currNode] + graph.edge(currNode, v);
    if (newDistance < distance[v]) {
      distance[v] = newDistance;
      previous[v] = currNode;
      q.changePriority(v, distance[v]);
    }
  };
  while (!q.isEmpty()) {
    currNode = q.extract();
    graph.neighbors(currNode).forEach(relax);
  }
  return {
    distance: distance,
    previous: previous
  };
}

module.exports = dijkstra;
