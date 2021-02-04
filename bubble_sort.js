export function swap(array, idx1, idx2) {
  let temp = array[idx1]; // save a copy of the first value
  array[idx1] = array[idx2]; // overwrite the first value with the second value
  array[idx2] = temp; // overwrite the second value with the first value
}

// Use this pseudocode to implement the bubble sort
export function bubbleSort(array) {
  //O(n^2) time  O(1) space
  // const copy = array.slice()  //O(n^2) time  O(n) space

  let sorted = false;
  
  while (!sorted) { //sorted === false
    sorted = true;
    for (let i = 0; i < array.length; i++) {
      let leftElement = array[i]
      let rightElement = array[i + 1]
      if (rightElement < leftElement) {
        console.log(array)
        swap(array, i, i + 1)
        sorted = false;
      }
    }
  }
  return array;
}
  