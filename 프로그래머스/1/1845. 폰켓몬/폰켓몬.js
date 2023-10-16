function solution(nums) {
    var answer = nums.length/2;
    let dub = [...new Set(nums)].length;

    return answer > dub ? dub : answer;
}