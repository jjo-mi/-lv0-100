function solution(my_string) {
    let arr = my_string.split('');
    var answer = new Set(arr);
    return [...answer].join('');
}