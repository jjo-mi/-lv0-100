const getInclination = ([x1, y1], [x2, y2]) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return dy / dx;
};

function solution(dots) {
  dots.sort((dotA, dotB) => dotA[0] - dotB[0]);
  const [a, b, c, d] = dots;
  const d1 = getInclination(a, b);
  const d2 = getInclination(c, d);
  return d2 === d1 ? 1 : 0;
}