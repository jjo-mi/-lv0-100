function solution(s1, s2) {
    
    let arr = new Set([...s1, ...s2]);
    var answer = s1.length + s2.length - arr.size;
    return answer;
}