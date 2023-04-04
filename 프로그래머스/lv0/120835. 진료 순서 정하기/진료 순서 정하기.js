function solution(emergency) {
    var answer = [];
    // 높은 값부터 보기위해 내림차순으로
    const 순서 = [...emergency].sort((a, b) => b - a);
   
    emergency.forEach(el => {
        let 순번 = 순서.indexOf(el) + 1;
        answer.push(순번);
    })
    return answer;
}