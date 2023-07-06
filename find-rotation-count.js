/**findRotationCount
accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

Constraints:

Time Complexity: O(log N)
 */
function findRotationCount(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  let lowestNumIdx;

  // if the first number is less than the last, it hasn't been rotated at all
  if (arr[0] < arr[arr.length - 1]) return 0;

  // otherwise find the rotation pt
  while (!lowestNumIdx) {
    let middleIdx = Math.floor((rightIdx + leftIdx) / 2);
    let middleVal = arr[middleIdx];
    if (middleVal < arr[middleIdx - 1]) {
      lowestNumIdx = middleIdx;
      return lowestNumIdx;
    } else if (middleVal > arr[0]) {
      leftIdx = middleIdx + 1;
    } else {
      rightIdx = middleIdx - 1;
    }
  }
}

module.exports = findRotationCount;
