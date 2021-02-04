export function binarySearch(array, target) {
  //hopping behind the wheel:
  if (array.length === 0) return false;

  // parameter array: a array of sorted value
  // parameter target: the value to search for

  // if the array has zero length, then return false

  // determine the slice point:
  // if the array has an even number of elements,
  //   the slice point is the number of elements
  //   divided by two
  // if the array has an odd number of elements,
  //   the slice point is the number of elements
  //   minus one divided by two
  let midIdx = Math.floor((array.length / 2));

  // create an array of the elements from 0 to the
  //   slice point, not including the slice point,
  //   which is known as the "left half"
  let leftHalf = array.slice(0, midIdx)
  let rightHalf = array.slice(midIdx + 1)
  // create an array of the elements from the
  //   slice point to the end of the array which is
  //   known as the "right half"

  // if the target is less than the value in the
  //   original array at the slice point, then
  //   return the binary search of the "left half"
  //   and the target
  if (target < array[midIdx]) return binarySearch(leftHalf, target)
  if (target > array[midIdx]) return binarySearch(rightHalf, target)
  // if the target is greater than the value in the
  //   original array at the slice point, then
  //   return the binary search of the "right half"
  //   and the target
  return true
  // if neither of those is true, return true
}

export function binarySearchIndex(array, target, low = 0, high = array.length - 1) {
  // parameter array: a array of sorted value
  // parameter target: the value to search for
  if (low === high) return -1;
  // parameter low: the lower index for the search
  // parameter high: the upper index for the search
  // if low is equal to high, then return -1 to indicate
  //   that the value was not found

  // determine the slice point:
  // console.log('array', array)
  let half = array.slice(low, high + 1)
  // low 1
  // high 4
  // floor(low
  // console.log(Math.floor(half.length / 2), Math.round((low + high) / 2));
  let midIdx = Math.floor((low + high) / 2);
  // let midIdx = Math.floor((half.length) / 2);
  // [1,23,41,12,3]
  //[ 1, 3, 12, 23, 41 ]
  // low = 1
  // high = 3


  //   if the array between the high index and the low index
  //   has an even number of elements,
  //     the slice point is the number of elements
  //     between high and low divided by two
  //   if the array between the high index and the low index
  //   has an odd number of elements,
  //     the slice point is the number of elements
  //     between high and low minus one, divided by two
  if (target < array[midIdx]) {
    return binarySearchIndex(array, target, low, midIdx)
  } else if (target > array[midIdx]) {
    return binarySearchIndex(array, target, midIdx + 1, high)
  } else {
    return midIdx;
  }
  // if the target is less than the value in the
  //   original array at the slice point, then
  //   return the binary search of the array,
  //   the target, low, and the slice point
  // if the target is greater than the value in the
  //   original array at the slice point, then return
  //   the binary search of the array, the target,
  //   the slice point plus one, and high
  // if neither of those is true, return the slice point
}

// let arr = [2, 3, 4, 5, 6, 6, ]
// binarySearchIndex(arr, 4)
