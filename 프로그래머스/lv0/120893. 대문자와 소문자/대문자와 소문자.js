function solution(my_string) {
    var answer = '';
    for(let el of my_string) {
        if(el == el.toUpperCase()){
            answer += el.toLowerCase();
        }else {answer += el.toUpperCase()}
        
    }
    return answer;
}