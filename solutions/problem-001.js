'use strict'

// Multiples of 3 and 5

const { test } = require('tap')

test('example', t => {
  t.plan(1)
  t.equals(sumOfMultiples(10), 23)
})

test('brute force solution', t => {
  t.plan(1)
  t.equals(sumOfMultiples(1000), 233168)
})

test('arithmetic progression solution', t => {
  t.plan(1)
  // GCD (greatest common divisor) of 3 & 5 is 1
  // LCM (least common multiple) is 3x5 15
  const solution = sumDivisbleBy(3, 999) + sumDivisbleBy(5, 999) - sumDivisbleBy(15, 999)
  t.equals(solution, 233168)
})

// brute force solution
function sumOfMultiples (n, ofNum = [3, 5]) {
  const multi = new Set()
  for (let x of ofNum) {
    const inc = x
    while (x < n) {
      multi.add(x)
      x += inc
    }
  }
  return Array.from(multi).reduce((a, b) => a + b)
}

function sumDivisbleBy (n, p) {
  // 3+6+9+12+…+999 = 3*(1+2+3+4+…+333)
  // 1+2+3+4+…+N = (N*(N+1)/2)
  // n*N*(N+1)/2
  // N = p/n
  const N = parseInt(p / n)
  return n * N * (N + 1) / 2
}
