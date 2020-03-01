'use strict'

// Smallest multiple

const { test } = require('tap')

test('example', t => {
  t.plan(1)
  t.equals(smallestMultiple(1, 10), 2520, 'can be divided by each')
})

test('solution', t => {
  t.plan(1)
  t.equals(smallestMultiple(1, 20), 232792560, 'can be divided by each')
})

function smallestMultiple (from, to) {
  const arr = []
  for (let i = from; i <= to; i++) {
    arr.push(i)
  }
  return leastCommonMultiple(arr)
}

function leastCommonMultiple (arr) {
  let a = arr[0]
  for (let i = 1; i < arr.length; i++) {
    const b = arr[i]
    a = a * b / euclide(a, b)
  }
  return a
}

// greatestCommonDivisor
function euclide (a, b) {
  // https://en.wikipedia.org/wiki/Euclidean_algorithm
  if (!b) {
    return a
  }
  return euclide(b, a % b)
}
