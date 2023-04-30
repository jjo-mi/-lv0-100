function solution(quiz) {
    var answer = [];
    quiz.map(item => {
        const [cal, result] = item.split(" = ");
        const isPlues = cal.includes("+");
        const [a, b, c] = cal.split(" ");
        const trueResult = isPlues ? (+a + +c) : (+a - +c);
        
        answer.push(result == trueResult? "O":"X")
    })
    return answer;
}