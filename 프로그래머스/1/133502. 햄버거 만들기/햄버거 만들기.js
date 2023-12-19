function solution(ingredient) {
    let answer = 0;
    let input = [];
    let pattern = '1231';
    
    for(let i = 0; i < ingredient.length; i++) {
        input.push(ingredient[i]);
        if(input.length >= 4){
            let temp = input.slice(-4).join('');
            if(temp == pattern) {
                answer++;
                input.splice(-4);
                
            }
        }
    }
    
    

    return answer;
}
