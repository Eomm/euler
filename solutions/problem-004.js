'use strict'

// Largest palindrome product

const { test } = require('tap')

test('example', t => {
  t.plan(1)
  t.equals(findLargesPalindrome(2), 9009, '91 * 99')
})

test('solution', t => {
  t.plan(1)
  t.equals(findLargesPalindrome(3), 906609, '913 * 993')
})

test('we just can do it', t => {
  t.plan(1)
  t.equals(findLargesPalindrome(4), 99000099, '9999 * 9901')
})

function findLargesPalindrome (digits) {
  const max = +'9'.repeat(digits)
  let maxProduct = max * max
  while (!(isPalindrome(maxProduct) && hasDigitFactor(max, maxProduct, digits))) {
    maxProduct--
  }
  return maxProduct
}

function isPalindrome (n) {
  // this can be optimized futher
  const ch = `${n}`
  return ch[0] === ch[ch.length - 1] && ch === ch.split('').reverse().join('')
}

function hasDigitFactor (max, num, digits) {
  const less = +`1${'0'.repeat(digits - 1)}`
  while (max > less) {
    if (num % max === 0 && String(Math.round(num / max)).length === digits) {
      return max
    }
    max--
  }
}
