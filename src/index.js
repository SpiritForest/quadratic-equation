module.exports = function solveEquation(equation) {
  var array = equation.split(' ');
  var numbers = [];
  numbers.push(Number(array[0]))
  for (let i = 1; i < array.length; i++){
    if (!!Number(array[i])) numbers.push(Number(array[i-1] + array[i]));
  }
  var [a,b,c] = [...numbers];
  var discr = b * b - 4 * a * c;
  var res = [];
  res.push(Math.round((-b + Math.sqrt(discr))/2/a));
  res.push(Math.round((-b - Math.sqrt(discr))/2/a));
  return res.sort((a, b) => a - b);
}
