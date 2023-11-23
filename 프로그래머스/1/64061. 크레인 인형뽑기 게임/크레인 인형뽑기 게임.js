function solution(board, moves) {
    var answer = 0;
    let basket = [];

    for (let pos of moves) {
        for (let i = 0; i < board.length; i++) {
            let item = board[i][pos - 1];
            
            if (item !== 0) {
                if (basket.length > 0 && basket[basket.length - 1] === item) {
                    basket.pop();
                    answer += 2;
                } else {
                    basket.push(item);
                }
                
                board[i][pos - 1] = 0;
                break;
            }
        }
    }
    
    return answer;
}
