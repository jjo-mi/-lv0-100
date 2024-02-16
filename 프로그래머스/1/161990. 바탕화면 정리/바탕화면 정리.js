function solution(wallpaper) {
    var answer = [];
    let x = [];
    let y = [];
    
    for(let i = 0; i < wallpaper.length; i++){
        for(let j=0; j < wallpaper[i].length; j++){
            if(wallpaper[i][j] === "#"){
                y.push(i);
                x.push(j);
            }
        }
    }
    
    x.sort((a,b)=> a-b)
    y.sort((a,b)=> a-b)

    console.log(x)
    console.log(y)
    
    return [y[0], x[0], y[y.length-1] +1 , x[x.length-1]+1];
}