'use strict'
class Graph {

  constructor() {
    // initialize adjacency list
    this.AdjList = new Map()
    this.hasCycle = false
  }

  /**
   * Takes a vertex as an argument and adds it to the graph
   * @param vertex
   */
  addVertex(vertex) {
    if (!this.AdjList.has(vertex)) {
      this.AdjList.set(vertex, [])
    }
  }

  /**
   * Adds an edge between vertex and node
   * @param vertex
   * @param node
   */
  addEdge(vertex, node) {
    if (this.AdjList.has(vertex)) {
      if (this.AdjList.has(node)){
        let arr = this.AdjList.get(vertex)
        if(!arr.includes(node)){
          arr.push(node)
        }
      }else {
        throw `Can't add non-existing vertex ->'${node}'`
      }
    } else {
      throw `'${vertex}' should be added first`
    }
  }

  /**
   * Initializes array to false for each node
   * @returns array
   */
  initializeArray(){
    let arr = {}
    for(let key of this.AdjList.keys()){
      arr[key] = false
    }
    return arr
  }

  /**
   * Topological sort
   * @returns an empty array if graph has a cycle or the path found (solution)
   */
  dfs(){
    let visited = this.initializeArray()
    let marked = this.initializeArray()
    let result = []
    for(let key of this.AdjList.keys()) {
      if (!visited[key])
        this.dfsVisited(key, marked, visited, result)
    }
    return this.hasCycle ? [] : result
  }

  /**
   * Recursively keep track of visited elements and identify if there is a cycle
   * @param node
   * @param visited
   * @param result
   */
  dfsVisited(node, marked, visited, result){
    if (marked[node])
      return

    if (visited[node]) {
      this.hasCycle = true
      return
    }

    visited[node] = true
    for(let elem of this.AdjList.get(node))
        this.dfsVisited(elem, marked, visited, result)
    
    marked[node] = true
    result.unshift(node)
  }

  /**
   *  Print graph vertices and adjacency list
   */
  print() {
    let g = 'Graph:\n'
    for (let [key, value] of this.AdjList) {
      g += '\t' + key + ' -> ' + value + '\n'
    }
    console.log(g)
  }
}

module.exports = Graph