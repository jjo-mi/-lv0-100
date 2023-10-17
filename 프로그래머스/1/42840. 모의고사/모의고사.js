function solution(answers) {
    let answer = []
    let answerArr = [0,0,0];
    let one = "1,2,3,4,5,".repeat(answers.length).split(",");
    let two = "2, 1, 2, 3, 2, 4, 2, 5,".repeat(answers.length).split(",");
    let three = "3, 3, 1, 1, 2, 2, 4, 4, 5, 5,".repeat(answers.length).split(",");
    
    for(let i = 0; i < answers.length; i++){
        if(answers[i] == one[i]) answerArr[0] += 1;
        if(answers[i] == two[i]) answerArr[1] += 1;
        if(answers[i] == three[i]) answerArr[2] += 1;
    }

    let bestNum = Math.max(...answerArr);
    answerArr.map((v, i) => {
        if(bestNum == v) answer.push(i+1);
    })
    
    console.log(answers)
    return answer;
}