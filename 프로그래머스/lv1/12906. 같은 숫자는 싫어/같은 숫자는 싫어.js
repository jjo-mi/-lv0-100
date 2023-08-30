function solution(arr)
{
    let array = [...arr];
    var answer = array.filter((v, _i) => {
        return v !== array[_i + 1];
    })
    return answer;
}