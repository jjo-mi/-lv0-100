function solution(babbling) {
    var answer = 0;
    const nephew = ["aya", "ye", "woo", "ma"];    

    babbling.forEach(sound => {

        if(nephew.includes(sound)) {
            answer+=1;
 
        }else{
            let temp = sound;
            nephew.forEach(can => {
                if(sound.includes(can.repeat(2))){
                    return;
                }
                temp = temp.split(can).join(' ')
            })
            if(temp.split(' ').join('').length === 0) {
                answer+=1;
            }
        }       
                
            



    })

    
    
    return answer;
}
