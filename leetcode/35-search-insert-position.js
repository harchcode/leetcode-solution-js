// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:
// Input: [1,3,5,6], 5
// Output: 2

// Example 2:
// Input: [1,3,5,6], 2
// Output: 1

// Example 3:
// Input: [1,3,5,6], 7
// Output: 4

// Example 4:
// Input: [1,3,5,6], 0
// Output: 0

let searchInsert = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      return i;
    } else if (target < nums[i] && target != nums[0]) {
      return i;
    } else if (target < nums[0]) {
      return i - 1;
    }
  }
  return nums.length;
};

import test from 'ava';

test('35-search-insert-position', t => {
  t.is(searchInsert([1, 3, 5, 6], 5), 2);
  t.is(searchInsert([1, 3, 5, 6], 2), 1);
  t.is(searchInsert([1, 3, 5, 6], 0), 0);
});
