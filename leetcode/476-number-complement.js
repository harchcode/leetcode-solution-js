// Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

// Note:
// 1. The given integer is guaranteed to fit within the range of a 32-bit signed integer.
// 2. You could assume no leading zero bit in the integer’s binary representation.

// Example 1:
// Input: 5
// Output: 2
// Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.

// Example 2:
// Input: 1
// Output: 0
// Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.

function findComplement(num) {
  let r = 0;
  let i = 0;

  while (num) {
    const tmp = 1 - (num & 1);

    r += tmp << i;
    i++;

    num >>= 1;
  }

  return r;
}

// Test

import test from 'ava';

test('476-number-complement', t => {
  t.is(findComplement(5), 2);
  t.is(findComplement(0b1011), 0b0100);
  t.is(findComplement(0b11011001), 0b00100110);
});
