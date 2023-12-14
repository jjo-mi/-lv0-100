function solution(s, skip, index) {
    var answer = '';
    const arr = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97)).filter(el=> !skip.includes(el));
    console.log(arr.length)

    for(let i = 0; i < s.length; i++) {
        let alphabetNum = arr.indexOf(s[i]); 
        let inx = (alphabetNum + index ) % (arr.length);
        answer += arr[inx]
        
    }
    return answer;
}