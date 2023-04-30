function solution(array) {
    const maxNum = Math.max(...array);
    const maxNumIndex = array.indexOf(maxNum);
    return [maxNum, maxNumIndex];
}