function solution(sides) {
    var answer = 0;
    let arr = sides.sort((a, b) => b-a);
    if(arr[1] + arr[2] <= arr[0]) {
        return 2
    }   
    
    return 1;
}