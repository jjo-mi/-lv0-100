function solution(s, n) {
    var answer = '';
//     let sArr = s.split('') 
//     const upperArr = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));
//     const lowerArr = Array.from({ length: 26 }, (_, index) => String.fromCharCode(97 + index));

//     sArr.map((el) => {
//         if (el === " ") {
//             answer += " ";
//           } else if (el === el.toUpperCase()) {
//                 upperArr.indexOf(el) > 24? (answer += upperArr[(upperArr.indexOf(el) + n) - upperArr.length]) : (answer += upperArr[upperArr.indexOf(el) + n])
//           } else {
//                 lowerArr.indexOf(el) > 24? answer += lowerArr[lowerArr.indexOf(el) + n - lowerArr.length] : answer += lowerArr[lowerArr.indexOf(el) + n] 
            
//           }
//     })
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';

    for(var i =0; i <s.length; i++){
        var text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        }
        var textArr = upper.includes(text) ? upper : lower;
        var index = textArr.indexOf(text)+n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    
    return answer;
}