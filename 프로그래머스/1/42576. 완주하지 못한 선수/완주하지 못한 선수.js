function solution(participant, completion) {
    let map = new Map();
    let arr = [...participant,...completion]
    
    for(let one of arr) {
        map.has(one) ?  map.delete(one): map.set(one,1) ;
    }

    let answer = Array.from(map.keys()).join(',')
    
    return answer;
}