function solution(ingredient) {
    let answer = 0;
    let input = [];
    // let buger = ingredient.join('');
    let pattern = '1231';
    
    for(let i = 0; i < ingredient.length; i++) {
        input.push(ingredient[i]);
        // console.log(input);
        if(input.length >= 4){
        // console.log('확인중');
            
            let temp = input.slice(-4).join('');
        // console.log('temp',temp);
            
            
            if(temp == pattern) {
                answer++;
        // console.log('!!', answer);
                
                input.splice(-4);
                
            }
        }
    }
    
    

    return answer;
}
