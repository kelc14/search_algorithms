/** findRotatedIndex
 accepts a rotated array of sorted numbers and an integer,  returns the index of num in the array. If the value is not found, return -1.

Constraints:

Time Complexity: O(log N)
 */
function findRotatedIndex(arr, num) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  let lowestNumIdx;

  if (arr[leftIdx] === num) return leftIdx;

  // find the rotation pt
  while (!lowestNumIdx) {
    let middleIdx = Math.floor((rightIdx + leftIdx) / 2);
    let middleVal = arr[middleIdx];
    if (middleVal < arr[middleIdx - 1]) {
      lowestNumIdx = middleIdx;
    } else if (middleVal > arr[0]) {
      leftIdx = middleIdx + 1;
    } else {
      rightIdx = middleIdx - 1;
    }
  }

  if (arr[lowestNumIdx] === num) return lowestNumIdx;

  if (num <= arr[arr.length - 1]) {
    // if btwn lowestNum and last //
    leftIdx = lowestNumIdx;
    rightIdx = arr.length - 1;
  } else {
    // if btwn first and lowestNum  //
    leftIdx = 0;
    rightIdx = lowestNumIdx;
  }

  // find the index from within either the right side of rotation pt or left side of rotation pt
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if (middleVal < num) {
      leftIdx = middleIdx + 1;
    } else if (middleVal > num) {
      rightIdx = middleIdx - 1;
    } else {
      return middleIdx;
    }
  }
  return -1;
}
module.exports = findRotatedIndex;
