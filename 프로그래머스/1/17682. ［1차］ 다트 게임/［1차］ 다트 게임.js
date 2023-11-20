// s =1제곱 d= 2제곱 t = 3제곱
// * = 바로전의 점수와 현재점수 2배  # 은 점수에서 마이너스
// 숫자는 1~10 사이
function solution(dartResult) {
    var answer = [];
    let num = 0;
    for(let i = 0; i < dartResult.length; i++){  
        if(!isNaN(dartResult[i])){
        num = Number(dartResult[i-1]) === 1 ? 10 : Number(dartResult[i]); 
        }
        if(dartResult[i] === "S") answer.push(num);
        if(dartResult[i] === "D") answer.push(num**2); 
        if(dartResult[i] === "T") answer.push(num**3);
        if(dartResult[i] === "*"){
               answer[answer.length-1] *=2;
               answer[answer.length-2] *=2;
        }
        if(dartResult[i] === "#"){
               answer[answer.length - 1] *= -1;
        }
    }
    return answer.reduce((acc,cur)=> acc+cur,0 );
}