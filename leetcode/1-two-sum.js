// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSum(nums, target) {
  let result = new Map();
  for (let no = 0; no < nums.length; no++) {
    if (result.has(target - nums[no])) {
      return [result.get(target - nums[no], no), no];
    } else {
      result.set(nums[no], no);
    }
  }
}

import test from 'ava';

test('1-two-sum', t => {
  t.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
});
