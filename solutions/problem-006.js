'use strict'

// Sum square difference

const { test } = require('tap')

test('example', t => {
  t.plan(1)
  t.equals(squareMinusSum(10), 2640)
})

test('solution', t => {
  t.plan(1)
  t.equals(squareMinusSum(100), 25164150)
})

function squareMinusSum (num) {
  return Math.pow(gauss(num), 2) - squareGauss(num)
}

function squareGauss (num) {
  return (num * (num + 1) * (2 * num + 1)) / 6
}

function gauss (num) {
  return (num * (num + 1)) / 2
}
