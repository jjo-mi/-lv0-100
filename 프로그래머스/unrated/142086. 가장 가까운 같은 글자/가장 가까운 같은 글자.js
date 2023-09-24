function solution(s) {
    let answer = [];
    let passArr = [];
    for(let i = 0; i < s.length; i++){
        if(!passArr.includes(s[i])){
            answer.push(-1);
            passArr.push(s[i]);
        }else if(passArr.includes(s[i])) {
            answer.push(i- passArr.lastIndexOf(s[i]));
            passArr.push(s[i])
        }
    }
    return answer;
}