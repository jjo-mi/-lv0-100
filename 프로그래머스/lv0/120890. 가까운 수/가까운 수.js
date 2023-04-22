function solution(array, n) {
    if(array.length === 1) return array[0]
    let arr = [...array]
    arr.push(n);
    arr.sort((a, b) => a-b);
    
    let nIndex = arr.indexOf(n);

    // n을 중심으로 앞뒤로 값차이가 덜 나는 쪽을 리턴하는 기능을 구현
    
    if(arr[nIndex] - arr[nIndex-1] > arr[nIndex+1] - arr[nIndex] ){
        return arr[nIndex+1]
    } else if(arr[nIndex] - arr[nIndex-1] === arr[nIndex+1] - arr[nIndex]) {
        return arr[nIndex-1]
    } else {return arr[nIndex-1]}

}