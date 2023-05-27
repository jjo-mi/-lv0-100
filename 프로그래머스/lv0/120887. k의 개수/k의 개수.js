function solution(i, j, k) {
    var arr = [];
   let regexAll = new RegExp(k, 'g')
    
    for(let curr = i; curr <= j; curr++) {
        arr.push(String(curr));
    }
    
    let answer = arr.join('').match(regexAll)

    return answer === null ? 0 :answer.length;
}