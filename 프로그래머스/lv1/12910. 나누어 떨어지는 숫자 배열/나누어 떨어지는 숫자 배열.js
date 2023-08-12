function solution(arr, divisor) {
    var answer = [];
    arr.map(el => {
        if(el % divisor === 0) {
           answer.push(el)
           }
    })
    return answer.length !== 0 ? answer.sort((a,b)=>a-b) : [-1];
}