// 아이디 길이는 3자 이상 15자 이하
// 아이디 허용 문자 (알파벳 소문자 -  _ .) 
// '.'은 맨앞, 맨뒤, 연속으로 사용불가
// 7단계에 맞춰서 문자 치환하기
function solution(new_id) {
    var answer='' ;
    let pattern = /[a-z0-9\-_.]/g;
    let dotPattern = /\.{2,}/g
    let maxLength = 15;
    
    answer = new_id.toLowerCase().match(pattern);
    answer = answer ? answer.join("") : "";
    // 4단계 연속된 .은 . 하나로 치환, 5단계 
    answer = answer.replace(dotPattern, '.')
    answer = answer.replace(/^\.+|\.+$/g, '')
    
    if(answer.length >= 16){
        answer = answer.slice(0, maxLength).replace(/\.$/, ''); 
    }
    
    if(answer.length <= 2) {
        let lastChar = answer.charAt(answer.length - 1);
        answer += lastChar.repeat(3 - answer.length);
    }
    return answer === ""? "a".repeat(3) : answer;
}