module.exports = function reverse (n) {
  let A = String(n).split('');
  let B = [];
  let res;
  if (A[0] === '-') {
    A.shift();
  }
  for (let i = A.length - 1; i >= 0; i--) {
    B.push(A[i])
  }

  if (B[0] === '0') {
    B.shift()
  }
   res = B.join('');
   return res;   
}
