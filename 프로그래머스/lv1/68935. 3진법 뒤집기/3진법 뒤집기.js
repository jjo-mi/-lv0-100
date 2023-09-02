function solution(n) {
    var three = n.toString(3)
    let answer = String(three).split('').reverse().join('');
    return parseInt(answer, 3);
}