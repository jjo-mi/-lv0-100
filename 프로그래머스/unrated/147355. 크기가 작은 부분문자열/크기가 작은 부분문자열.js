function solution(t, p) {
    var answer = 0;
    const pLength = p.length;
    for(let i=0; i<(t.length-pLength+1); i++) {
        if(+t.substr(i,pLength) <= (+p)) {
            answer++;
        } 
    }
    return answer;
}