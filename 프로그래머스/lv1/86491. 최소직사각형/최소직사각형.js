function solution(sizes) {
    var answer = 0;
    let x = [];
    let y = [];
    let high = [0, 0];
    
    for (let arr of sizes) {
        arr.sort((a, b) => b - a);;
    }
    
    sizes.map(el=>{
        x.push(el[0]);
        y.push(el[1]);
    })

    return Math.max(...x)*Math.max(...y);
}