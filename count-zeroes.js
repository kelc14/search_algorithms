function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let middleIdx = (rightIdx - leftIdx) / 2;
    let lastVal = null;
    let middleVal = arr[middleIdx];
    if (middleVal === 1) {
      leftIdx = middleIdx;
    } else {
      rightIdx = middleIdx;
    }
  }
}

module.exports = countZeroes;
