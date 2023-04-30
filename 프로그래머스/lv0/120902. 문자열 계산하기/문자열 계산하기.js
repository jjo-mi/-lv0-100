function solution(my_string) {
 
    const arr = my_string.split(" ");
     var answer = Number(arr[0]);
    
    arr.forEach((item, index) => {
        if(item === "+"){
            answer += Number(arr[index + 1]);
        }
        if(item === "-"){
            answer -= Number(arr[index + 1]);
        }
    })
    
 
    // if(arr[1] === "+") {
    //     answer = Number(arr[0]) + Number(arr[2])*1
    // } else if(arr[1] === "-"){
    //     answer = Number(arr[0]) - Number(arr[2]) *1
    // }

    return answer;
}