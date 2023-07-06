/** findFloor
accepts a sorted array and a value x,  returns the floor of x in the array. 

The floor of x in an array is the largest element in the array which is smaller than or equal to x. 

If the floor does not exist, return -1.

 */
function findFloor(arr, x) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  // if the number is lower than the first, there is no floor return -1
  if (x < arr[0]) return -1;
  // if the number is higher than the last, the last num is the floor
  if (x > arr[arr.length - 1]) return arr[arr.length - 1];

  // otherwise find it:
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if (middleVal < x && arr[middleIdx + 1] > x) {
      return middleVal;
    } else if (middleVal < x) {
      leftIdx = middleIdx + 1;
    } else if (middleVal > x) {
      rightIdx = middleIdx - 1;
    } else {
      return middleIdx;
    }
  }
}

module.exports = findFloor;
