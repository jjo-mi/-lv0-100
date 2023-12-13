function solution(keymap, targets) {
    var answer = [];
    let map = new Map();
    for(let key of keymap) {
        for(let i = 0; i < key.length; i++) {
            if(!map.has(key[i])) {
                map.set(key[i], i+1);
            }else{
                if(map.get(key[i]) > i+1) {
                    map.set(key[i], i+1)
                }
            }
        }        
    }
    // console.log(map)
    for(let word of targets) {
        let point = 0;
        let arr = word.split('');
        arr.map(item => {
            point += map.get(item);
        })
        
        point ? answer.push(point) : answer.push(-1);
    }
    // console.log(answer)

    return answer.length == 0 ? [-1] : answer;
}