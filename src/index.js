const Graph =  require('./models/graph')

function rosettaStone(words) {
  let startingNode = words[0][0]

  let graph = new Graph()
  words.forEach(w => w.split('').forEach(ch => graph.addVertex(ch)))

  words.reduce((prev, curr) => {
    for (let i = 0; i < Math.min(prev.length, curr.length); i++) {
      if (prev[i] !== curr[i]) {
        graph.addEdge(prev[i], curr[i])
        break
      }
    }
    return curr
  })


  graph.print()

  let ordering = graph.dfs(startingNode)
  console.log('Output: ', ordering)
  return ordering
}

module.exports = rosettaStone