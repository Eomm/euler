'use strict'

// 10001st prime

const { test } = require('tap')
const { getNextPrime } = require('./problem-003')

test('example', t => {
  t.plan(1)
  t.equals(findPrimeNumber(6), 13)
})

test('solution', t => {
  t.plan(1)
  t.equals(findPrimeNumber(10001), 104743)
})

function findPrimeNumber (pos) {
  let next = 0
  while (--pos > 0) {
    next = getNextPrime(next)
  }
  return next
}
