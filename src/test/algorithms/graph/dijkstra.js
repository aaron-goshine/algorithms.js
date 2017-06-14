'use strict';

const root = require('../../../');
const dijkstra = root.Graph.dijkstra;
const Graph = root.DataStructures.Graph;
const assert = require('assert');

describe('Dijkstra Algorithm', function() {
  it('should return the shortest paths to all nodes from a given origin',
    function() {
      const g = new Graph();
      g.addEdge('a', 'b', 5);
      g.addEdge('a', 'c', 10);
      g.addEdge('b', 'c', 2);
      g.addEdge('b', 'd', 20);
      g.addEdge('c', 'd', 1);
      g.addEdge('d', 'a', 10);

      const shortestPath = dijkstra(g, 'a');
      assert.equal(shortestPath.distance.b, 5);
      assert.equal(shortestPath.previous.b, 'a');

      assert.equal(shortestPath.distance.c, 7);
      assert.equal(shortestPath.previous.c, 'b');

      assert.equal(shortestPath.distance.d, 8);
      assert.equal(shortestPath.previous.d, 'c');
    });
});
