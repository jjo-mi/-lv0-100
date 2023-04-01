function solution(age) {

  const ageArr = String(age).split("");
    
    const eng = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    
    let answer = "";
    
    for(let i = 0; i < ageArr.length; i++){
        let index = Number(ageArr[i]);
        
        answer += eng[index];
    }
    
    return answer;
    
}