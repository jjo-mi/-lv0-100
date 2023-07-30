function solution(n) {

    let str = String(n)
    
    return str.split('').map(Number).reverse();
}