function solution(food) {
    var answer = '';
    food.map((el,idx) => {
        let sameFoodCnt = parseInt(el/2);           
        answer += String(idx).repeat(sameFoodCnt);
        console.log(sameFoodCnt);
    })
    let reverse = answer.split("").reverse().join("");
    
    return answer + "0"+ reverse;
}