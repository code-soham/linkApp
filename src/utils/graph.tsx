var data: Array<{ id: String; adj: Array<String> }> = []
var visited: Set<String> = new Set()
function fetchLocal() {
  var rawData = localStorage.getItem('edges@code_soham')
  data = rawData ? JSON.parse(rawData) : []
}
function bfs(data: Array<{ id: String; adj: Array<String> }>, start: String, end: String) {
  data = data.filter(({ adj }) => adj !== [] && adj !== undefined)
  console.log(data)
  let target = data.find((item) => item.id === start)
  if (target === undefined) {
    return []
  }
  let queue: Array<Array<String>> = []
  queue.push([start])
  while (queue.length !== 0) {
    var path: Array<String> = queue.shift() || []
    var node = path[path.length - 1]
    if (node === end) {
      return path
    }
    if (node !== undefined && !visited.has(node)) {
      visited.add(node)
      // eslint-disable-next-line no-loop-func
      var rawEdge = data.find((item) => item.id === node)
      if (rawEdge !== undefined) {
        var edges = rawEdge.adj
        for (var i = 0; i < edges.length; i++) {
          if (!visited.has(edges[i])) queue.push(path.concat(edges[i]))
        }
      }
    }
  }
}
function findRelation(nodes: String[]) {
  data = []
  visited = new Set()
  fetchLocal()
  var path = bfs(data, nodes[0], nodes[1])
  return path
}

export { findRelation }
