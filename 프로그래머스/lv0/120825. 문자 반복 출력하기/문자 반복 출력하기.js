function solution(my_string, n) {
    
    let arr = my_string.split('');
    console.log(arr);
    var answer = [];
    arr.forEach( x => {
        let a = x.repeat(n);
        answer.push(a);
    });
  
    return answer.join('');
}