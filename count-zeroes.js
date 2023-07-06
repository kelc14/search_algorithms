/** countZeroes
Given an array of 1s and 0s which has all 1s first followed by all 0s, returns the number of zeroes in the array.

Constraints:

Time Complexity: O(log N)
 */

function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((rightIdx + leftIdx) / 2);
    let middleVal = arr[middleIdx];
    if (middleVal === 1) {
      leftIdx = middleIdx + 1;
    } else if (middleVal === 0 && arr[middleIdx - 1] === 0) {
      rightIdx = middleIdx - 1;
    } else {
      return arr.length - middleIdx;
    }
  }
  return 0;
}

module.exports = countZeroes;
