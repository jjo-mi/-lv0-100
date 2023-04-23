function solution(s) {
    var answer = [];
    let sArr = [...s];
    let dup = new Set(s);
    console.log(sArr);
    if(dup.size === s.length) sArr.sort().join("");
    
    sArr.forEach(el => {
        if(s.indexOf(el) === s.lastIndexOf(el)){
            answer.push(el);
        }
    })
    return answer.sort().join('');
}