function solution(id_pw, db) {
    let answer = ''
    
    db.forEach(el => {
        if(el[0] === id_pw[0]) {
             el[1] === id_pw[1] ? answer = 'login': answer =  'wrong pw'   
        }
    })
    
    if(answer === '') answer= "fail"
    return answer;
}