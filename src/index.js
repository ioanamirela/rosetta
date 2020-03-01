'use strict'
const Graph =  require('./models/graph')

function rosettaStone(words) {
  let graph = new Graph()
  // add vertices for each unique character
  words.forEach(w => w.split('').forEach(ch => graph.addVertex(ch)))

  words.reduce((prev, curr) => {
    for (let i = 0; i < Math.min(prev.length, curr.length); i++) {
      // find first different characters in words and add edges
      if (prev[i] !== curr[i]) {
        graph.addEdge(prev[i], curr[i])
        break
      }
    }
    return curr
  })

  // print the graph just for fun
  graph.print()

  return graph.dfs()
}

module.exports = rosettaStone