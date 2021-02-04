// Try to implement swap on your own, this time.
function swap(arr, index1, index2) {
  let tempEl = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = tempEl
}

function selectionSort(array) {
  // array  : array of items
  // n     : size of array
  for (let i = 0; i < array.length; i++) {
    let minNumber = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[minNumber] > array[j]) {
        minNumber = j
      }
    }
    if (i === minNumber) continue
    if (i !== minNumber) swap(array, i, minNumber)

  }
  return array
}
// ndexMin != i
//               |    i    j    minNum
//  [1,3,5,1,3]  |    0             
// [1, 3, 5, 1, 3]    1          3
// [1, 1, 5, 3, 3]    2    3     3
// [1, 1, 3, 5, 3]
// for i = 1 to n - 1
// /* set current element as minimum*/
//    min = i
//
//    /* check the element to be minimum */
//
//    for j = i+1 to n
//       if list[j] < list[min] then
//          min = j;
//       end if
//    end for
//
//    /* swap the minimum element with the current element
//       using the above swap function*/
//  if i  then
//       swap list[min] and list[i]
//    end if
// end for

// range


module.exports = {
  selectionSort,
  swap
};