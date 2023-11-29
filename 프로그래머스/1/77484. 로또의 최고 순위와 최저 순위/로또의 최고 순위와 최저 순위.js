function solution(lottos, win_nums) {
    var answer = [];
    let rank = [6,6,5,4,3,2,1] 
    let zeroCnt = lottos.filter(x=> x === 0).length;
    let collectCnt = lottos.filter(num => win_nums.includes(num)).length;
    if(collectCnt === 6) {
        return [1,1];
    }
    if(zeroCnt === 6){
        return [1,6]
    }
    answer.push(rank[zeroCnt+collectCnt]);
    answer.push(rank[collectCnt])
    return answer;
}