'use strict'

// Even Fibonacci numbers

const { test } = require('tap')

test('example', t => {
  t.plan(1)
  t.equals(fibonacci(11), 89)
})

test('example cached', t => {
  t.plan(1)
  const fibo = memoFibonacci()
  t.equals(fibo(11), 89)
})

test('find 4 millions', t => {
  t.plan(1)
  const fibo = memoFibonacci()
  let tot = 0
  let n = 15
  while (tot < 4000000) {
    tot = fibo(++n)
  }
  t.equals(--n, 33, 'find 4 million')
})

test('find the sum of the even-valued terms', t => {
  t.plan(1)
  const fibo = memoFibonacci()
  fibo(33) // load cache

  const sumEven = Array.from(fibo.cache.values())
    .filter(_ => _ % 2 === 0 && _ < 4000000)
    .reduce((a, b) => a + b)

  t.equals(sumEven, 4613732)
})

function fibonacci (n) {
  if (n === 0 || n === 1) { return n }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

function memoFibonacci () {
  const cache = new Map()
  cached.cache = cache

  return cached

  function cached (n) {
    if (cache.has(n)) {
      return cache.get(n)
    }

    const val = fibonacci(n)
    cache.set(n, val)
    return val
  }

  function fibonacci (n) {
    if (n === 0 || n === 1) { return n }
    return cached(n - 1) + cached(n - 2)
  }
}
