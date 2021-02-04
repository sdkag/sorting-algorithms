export function insertionSort(array, o) {
  for (let i = 1; i < array.length; i++) {
    const number = array[i];
    for (var j = i - 1; j >= 0 && array[j] > number; j--) {
      let currentValue = array[j]; //10
      console.log(number, currentValue, array)
      array[j + 1] = array[j];
    }
    array[j + 1] = number;
  }
  return array;
}