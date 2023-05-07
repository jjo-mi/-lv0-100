function solution(dots) {
    let a = Math.max(...dots.map(el => el[0])) - Math.min(...dots.map(el => el[0]))
    let b = Math.max(...dots.map(el => el[1])) - Math.min(...dots.map(el => el[1]))
    return a*b;
}