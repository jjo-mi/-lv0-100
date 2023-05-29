function solution(A, B) {
    let arr = [...A]
    var answer = 0;
    
    if(A=== B) {
        return 0
    } else {
        for(let i = 0; i<arr.length; i++){
            arr.unshift(arr.pop())
            if(arr.join('') === B){
                return i+1;
            }
        }
        
    }

    return -1;
}