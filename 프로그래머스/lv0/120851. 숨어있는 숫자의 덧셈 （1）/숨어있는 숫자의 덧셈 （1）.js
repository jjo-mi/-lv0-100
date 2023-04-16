function solution(my_string) {
    var answer = 0;
    let number = my_string.replace(/[^0-9]/g, '').split('').map(el => parseInt(el));
    
    return number.reduce((sum, curr) =>  sum + curr);
}