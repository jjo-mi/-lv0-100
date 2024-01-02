function solution(survey, choices) {
    var answer = '';
    let type ={ R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0};
    // 비동의(1~3) 1부터  3점~1점 추가/ 4 무시 /동의(5~7) 동의에 1~3점 추가
    for(let i=0; i< choices.length; i++) {
        let [noAgreement,agreement] = survey[i].split(''); 
        let score = Math.abs(choices[i] -4);
        if(choices[i] > 4) {
            type[agreement] += score;
        }else if(choices[i] < 4) {
            type[noAgreement] += score;
        }
        
    }
    const typeArr = Object.keys(type);
    
    for(let i=0; i<typeArr.length; i+=2) {
        if(answer.length === 4) return answer;
        let leftScore = type[typeArr[i]];
        let rightScore = type[typeArr[i+1]];
        
        if(leftScore >= rightScore){
            answer+= typeArr[i]
        }else{
            answer+= typeArr[i+1]
        }                         
    }


    return answer;
}