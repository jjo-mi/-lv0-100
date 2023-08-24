function solution(s) {
    return (!!s.match(/[a-zA-Z]/) ? false :  s.length == 4 || s.length == 6) ? true: false;
}


