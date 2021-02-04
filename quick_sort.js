function quickSort(array) {
  if (array.length < 2) {
    return array;
  }

  let pivot = array.shift();
  let left = array.filter(el => el < pivot)
  let right = array.filter(el => el >= pivot)

  let sL = quickSort(left);
  let sR = quickSort(right);

  return sL.concat(pivot, sR)
  // if the length of the array is 0 or 1, return the array

  // set the pivot to the first eln
  // remove the first element of the array

  // put all values less than the pivot value into an array called left
  // put all values greater than the pivot value into an array called right

  // call quick sort on left and assign the return value to leftSorted
  // call quick sort on right and assign the return value to rightSorted

  // return the concatenation of leftSorted, the pivot value, and rightSorted
}


module.exports = {
  quickSort
};