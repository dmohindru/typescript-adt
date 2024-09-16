import { CollectionOps } from 'src/interfaces';

/**
 * Interface representing a generic Graph ADT.
 */
export interface Graph<T> extends CollectionOps {
  /**
   * Add a vertex to the graph
   * @param vertex - The vertex to add to graph.
   */
  addVertex(vertex: T): void;

  /**
   * Add an edge between two vertices, with an optional weight (for weighted graphs)
   * @param vertex1 - The first vertex of an edge.
   * @param vertex2 - The second vertex of an edge.
   * @param weight - (optional) weight of an edge.
   */
  addEdge(vertex1: T, vertex2: T, weight?: number): void;

  /**
   * Remove an edge between two vertices
   * @param vertex1 - The first vertex of an edge.
   * @param vertex2 - The second vertex of an edge.
   */
  removeEdge(vertex1: T, vertex2: T): void;

  /**
   * Removes a vertex and all its edges from the graph
   * @param vertex - Vertex to be removed
   * @param comparator - (optional) custom comparator used for complex types for a vertex
   */
  removeVertex(vertex: T, comparator?: (v1: T, v2: T) => number): void;

  /**
   * Perform Depth-First Search (DFS) from a given starting vertex
   * @param startVertex - Start vertex for a DFS
   * @param comparator - (optional) applying a callback function to each visited vertex.
   */
  depthFirstSearch(startVertex: T, callback?: (vertex: T) => void): void;

  /**
   * Perform Breadth-First Search (BFS) from a given starting vertex
   * @param startVertex - Start vertex for a BFS
   * @param comparator - (optional) applying a callback function to each visited vertex.
   */
  breadthFirstSearch(startVertex: T, callback?: (vertex: T) => void): void;

  /**
   * Check if there is an edge between two vertices
   * @param vertex1 - first vertex
   * @param vertex2 - second vertex
   */
  hasEdge(vertex1: T, vertex2: T): boolean;

  /**
   * Retrieve all neighbors of a vertex
   * @param vertex - vertex in question
   */
  getNeighbors(vertex: T): T[];

  /**
   * Get all vertices in the graph
   */
  getVertices(): T[];

  /**
   * Get all edges in the graph
   */
  getEdges(): Array<{ from: T; to: T; weight?: number }>;

  /**
   * Sort vertices or edges based on some criteria (optional implementation for special cases)
   * @param comparator - comparator function used for comparison
   */
  sortVertices(comparator: (a: T, b: T) => number): T[];

  /**
   * Sorts edges using a custom comparator
   * @param comparator - comparator function used for comparison
   */
  sortEdges(
    comparator: (
      a: { from: T; to: T; weight?: number },
      b: { from: T; to: T; weight?: number }
    ) => number
  ): void;

  /**
   * Check if the graph is connected
   */
  isConnected(): boolean;

  /**
   * Get the shortest path between two vertices (for unweighted graphs, returns number of edges)
   * @param vertex1 - First vertex
   * @param vertex2 - Second vertex
   */
  shortestPath(vertex1: T, vertex2: T): T[] | null;
}
