function solution(name, yearning, photo) {
    var answer = [];
    photo.map(item => {
        let sum = 0;
        name.map((one,idx) => {
            let cnt = item.filter(el => el === one).length;
            sum += cnt * yearning[idx];
        })
        answer.push(sum);
    });
    
    return answer;
}