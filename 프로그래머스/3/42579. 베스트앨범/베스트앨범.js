function solution(genres, plays) {
    // var answer = [];
    // let obj = {};
    let chart = genres.reduce((obj, genre, i) => {
        if(!obj[genre]){
            obj[genre] = {playCnt: plays[i], list:[] }
        } else{
            obj[genre].playCnt += plays[i]
        }
        obj[genre].list.push([i, plays[i]]);
        return obj;
    }, {})
    
    let cntSorted = Object.values(chart).sort((a,b) => {
        return b.playCnt - a.playCnt; 
    })

    // console.log(chart.classic);
    // console.log(chart.pop);
    
    // console.log('cntSorted', cntSorted)
    
    
    const answer = cntSorted.reduce((acc, genre) => {
        genre.list.sort((a,b) => {
           return b[1] - a[1];
        });
        // console.log('리스트 정렬',genre.list)
        // console.log('acc',acc)
        
        acc.push(genre.list[0][0]);
        // console.log('acc',acc);
        if(genre.list.length > 1) {
            acc.push(genre.list[1][0]);
        }
        return acc;
    }, [])
    
    // console.log('answer',answer)
    
    return answer;
}