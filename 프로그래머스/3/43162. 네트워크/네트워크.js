// 서로간의 연결상태가 배열로 들어가 있음
function solution(n, computers) {
    var answer = 0;
    let visited = Array(n).fill(false);
    // console.log(visited)
    
    function bfs(i){
        // needVisit.push(...curCom);
        for(let j = 0; j < computers.length; j++){
            if(computers[i][j] === 1 && !visited[j]){
                visited[j] = true;
                bfs(j);
            }
        }
    }
    
    for(let i = 0; i < n; i++) {
        if(!visited[i]){
            visited[i] = true;
            bfs(i);
            answer++;
        } 
    }  
    

    return answer;
}