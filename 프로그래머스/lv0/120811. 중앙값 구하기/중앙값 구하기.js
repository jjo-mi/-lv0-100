function solution(array) {
 let sortNum = array.sort((a,b) => a - b);
    let center = Math.floor(sortNum.length / 2);
    console.log(center)
    return array[center];
}