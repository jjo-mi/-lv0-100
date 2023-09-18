function solution(s) {
    let arr= ["zero", "one","two","three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;
    
    
    for(let i=0; i < arr.length; i++){
        let word = answer.split(arr[i]);
         answer = word.join(i);

    }

    return Number(answer);
}