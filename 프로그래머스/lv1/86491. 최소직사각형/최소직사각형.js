function solution(sizes) {
    let x = [];
    let y = [];
    
    for (let arr of sizes) {
        arr.sort((a, b) => b - a);;
    }
    
    sizes.map(el=>{
        x.push(el[0]);
        y.push(el[1]);
    })

    return Math.max(...x)*Math.max(...y);
}
