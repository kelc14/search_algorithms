/** sortedFrequency
Given a sorted array and a number, counts the occurrences of the number in the array

Constraints:

Time Complexity: O(log N)
 */

function sortedFrequency(arr, target) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let start;
  let end;

  // works to find first one - >
  while (leftIdx <= rightIdx && !start && start !== 0) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if (middleVal < target) {
      leftIdx = middleIdx + 1;
    } else if (middleVal > target) {
      rightIdx = middleIdx - 1;
    } else if (middleVal === target && arr[middleIdx - 1] === target) {
      rightIdx = middleIdx - 1;
    } else {
      start = middleIdx;
      //   return `found it starting at ${middleIdx}`;
    }
  }

  // if nothing was found, return 0
  if (!start && start !== 0) return 0;

  leftIdx = start;
  rightIdx = arr.length - 1;
  // find the end
  while (leftIdx <= rightIdx && !end && end !== 0) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if (middleVal < target) {
      leftIdx = middleIdx + 1;
    } else if (middleVal > target) {
      rightIdx = middleIdx - 1;
    } else if (middleVal === target && arr[middleIdx + 1] === target) {
      leftIdx = middleIdx + 1;
    } else {
      end = middleIdx;
    }
  }
  return end - start + 1;
}

module.exports = sortedFrequency;
