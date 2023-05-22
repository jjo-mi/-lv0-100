function solution(score) {
    var answer = [];
    let 점수 = score.map(el => (el[0] + el[1])/2);
    console.log(점수)
    let rank = 점수.slice().sort((a,b)=> b-a);
    
    
    return 점수.map(el => rank.indexOf(el)+1);
}