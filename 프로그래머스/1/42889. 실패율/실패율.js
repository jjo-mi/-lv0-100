function solution(N, stages) {
    // 실패율 클리오 못한 플레이어의 수/ 스테이지에 도달한 플레이어 수
    // 멈춰있는 스테이지가 많은 순부터 적은 순으로 정렬 
    var answer = [];
    for(let i = 1; i <= N; i++){
        let noClear = stages.filter(x => x=== i).length;
        let clear= stages.filter(x => x >= i).length;
        answer.push([i, noClear/ clear])
    }
    answer.sort((a,b)=> b[1]-a[1]);
    
    return answer.map(el => el[0]);
}