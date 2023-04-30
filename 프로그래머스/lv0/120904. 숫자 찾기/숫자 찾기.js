function solution(num, k) {
    const str = String(num);
    const newArr = Array.from(str).map(Number);
   
    return newArr.includes(k)? newArr.indexOf(k) + 1 : -1;
}