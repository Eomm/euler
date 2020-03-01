'use strict'

// Largest prime factor

const { test } = require('tap')

test('example', t => {
  t.plan(1)
  t.equals(largestPrimeFactor(13195), 29)
})

test('solution', t => {
  t.plan(1)
  t.equals(largestPrimeFactor(600851475143), 6857)
})

function largestPrimeFactor (n, factor = 2) {
  // All numbers can be expressed as the product of primes
  while (n > 1) {
    if (n % factor === 0) {
      n /= factor
    } else {
      factor = getNextPrime(factor)
    }
  }
  return factor
}

function getNextPrime (prime) {
  for (let count = prime + 1; ; count++) {
    if (isPrime(count)) {
      return count
    }
  }
}

function isPrime (num) {
  for (let i = 2; i < Math.sqrt(num) + 1; ++i) {
    if (num % i === 0) {
      return false
    }
  }
  return num !== 1
}
