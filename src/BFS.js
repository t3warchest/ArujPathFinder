const wallIf = (wallArr,position,target) =>{
    if(position.toString()===target.toString()){
      return false
    }
    for(let i =0 ; i<wallArr.length ; i++){
      if(wallArr[i][0] === position[0] && wallArr[i][1] === position[1])
        return true;
    }

    return false;
  }

export default function BFS(graph, source, target,wallArr) {
    
    let parent = [];
    for (let i = 0; i < graph.length; i++) {
      const temp = [];
      for (let j = 0; j < graph[1].length; j++) {
        temp.push([-5, -5]);
      }
      parent.push(temp);
    }
  
    const visited = new Set();
    const q = [];
    q.push(source);
    const [dx, dy] = target;
    const [sr, sc] = source;
    parent[sr][sc] = [-1, -1];
    visited.add(`${sr},${sc}`);
    while (q.length) {
      const [row, col] = q.shift();
      if (row === dx && col === dy) {
        break;
      }
      
      const directions = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
      ];
      
      for (const [dr, dc] of directions) {
        const r = row + dr;
        const c = col + dc;
        if (
          r >= 0 &&
          c >= 0 &&
          r < graph.length &&
          c < graph[1].length &&
          !(wallIf(wallArr,[r,c],target)) &&
          !visited.has(`${r},${c}`)
        ) {
          visited.add(`${r},${c}`);
          q.push([r, c]);
          parent[r][c] = [row, col];
        }
      }
    }
    
    
    const path = [];
    let [dx1, dy1] = target;
    if (parent[dx1][dy1].toString()!==[-5,-5].toString()){
      while (dx1 !== -1 && dy1 !== -1) {
        path.push(parent[dx1][dy1]);
        [dx1, dy1] = parent[dx1][dy1];
      }
      
    }
    else{
      console.log("no path")
    }
    
    path.pop(0)
    
    return [path.reverse(),visited]
    
  }