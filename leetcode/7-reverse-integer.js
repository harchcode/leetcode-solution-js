// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

function reverse(x) {
  let result =
    Math.sign(x) *
    parseInt(
      x
        .toString()
        .split('')
        .reverse()
        .join('')
    );

  if (Math.abs(result) > Math.pow(2, 31)) {
    result = 0;
  }
  return result;
}

import test from 'ava';

test('7-reverse-integer', t => {
  t.is(reverse(123), 321);
  t.is(reverse(-123), -321);
  t.is(reverse(1534236469), 0);
});
