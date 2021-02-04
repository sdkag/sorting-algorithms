function merge(array1, array2) {
  // var result as array
  let sorted = [];
  while (array1.length || array2.length) {
    let num1 = array1.length ? array1[0] : Infinity;
    let num2 = array2.length ? array2[0] : Infinity;
    num1 < num2 ? sorted.push(array1.shift()) : sorted.push(array2.shift())
  }
  return sorted
}
// function merge(array1, array2) {
//   // var result as array
//   let sorted = [];
//   while (array1.length || array2.length) {
//     array1 < array2 ? sorted.push(array1.shift()) : sorted.push(array2.shift())
//   }
//   return sorted.concat(array1,array2)
// }
// arr =
// arr.reduce((acc, curVal) => {
//   return acc.concat(curVal)
//   , [])

  // while ( a and b have elements )
  //   if ( a[0] > b[0] )
  //     add b[0] to the end of result
  //     remove b[0] from b
  //   else
  //     add a[0] to the end of result
  //     remove a[0] from a
  //   end if
  // end while

  // while ( a has elements )
  //   add a[0] to the end of result
  //   remove a[0] from a
  // end while

  // while ( b has elements )
  //   add b[0] to the end of result
  //   remove b[0] from b
  // end while

  // return result

function mergeSort(array) {
  if (array.length <= 1) return array
  // if ( n == 1 ) return a

  // /* Split the array into two */
  const midIdx = array.length / 2;
  const leftHalf = array.slice(0, midIdx)
  const rightHalf = array.slice(midIdx)
  // var l1 as array = a[0] ... a[n/2]
  // var l2 as array = a[n/2+1] ... a[n]
  let sortedLeft = mergeSort(leftHalf)
  let sortedRight = mergeSort(rightHalf)

  return merge(sortedLeft, sortedRight) // nlogn   || loglinear,linearithmic, quasilinear
  // l1 = mergesort( l1 )
  // l2 = mergesort( l2 )

  // return merge( l1, l2 )
}

module.exports = {
  merge,
  mergeSort
};