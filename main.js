// import {insertionSort} from './insertion_sort.js'

document.addEventListener('DOMContentLoaded', () => {
  const array = [1, 4, 2, 5, 3, 1, 2, 3, -3];
  const arrEl = document.createElement('ul');
  arrEl.innerHTML = array.map((el, index) => `<li id=${index} class="array-elements">${el}</li>`).join('')

  const progress = {
    bubble : {
      arrays: [],
      indices: []
    },

    insertion: {
      arrays: [],
      indices: []
    }
  };

  updateArray(arrEl, array)
  document.body.appendChild(arrEl)
  let myInterVal

  const bubbleSortButton = document.getElementById('bubble-sort')
  const insertionSortButton = document.getElementById('insertion-sort')
  bubbleSortButton.addEventListener('click', () => {
    bubbleSort(array, cb)
    myInterVal = setInterval(grabDataBubble, 1500, myInterVal)

  })

  function updateArray(htmlElement, array) {
    if (!array) return
    htmlElement.innerHTML = array.map((el, index) => `<li id=${index} class="array-elements">${el}</li>`).join('')
  }

  function turnLiBlack(arr, index1, index2) {
    const indices = [index1, index2]
    arrEl.childNodes.forEach((leftEl, i) => {
      const rightEl = arrEl.childNodes[i + 1]
      const idxID = Number(leftEl.id)
      if (indices.includes(idxID)) {
        leftEl.style.border = 'solid'
        if (cb(arr[index1], arr[index2])) {
          leftEl.style.backgroundColor = 'red'
          rightEl.style.backgroundColor = 'red'
        }
      } else {
        leftEl.style.backgroundColor = 'white'
        leftEl.style.border = 'none'
      }
    })
  }

  function bubbleSort(array, callback, sorted = false) {
    while (!sorted) {
      sorted = true;
      array.forEach((left, i) => {
        progress.bubble.indices.push([i,i+1])
        progress.bubble.arrays.push(array.slice())
        if (callback(left, array[i + 1])) {
          [array[i], array[i + 1]] = [array[i + 1], array[i]]
          sorted = false;
        }
      })
    }
    return array;
  }

  function cb(el1, el2) {
    return el1 > el2
  }

  function grabDataBubble(interval) {
    const [arr, index] = [progress.bubble.arrays.shift(), progress.bubble.indices.shift()]
    updateArray(arrEl, arr)
    turnLiBlack(arr, index, index + 1)
    if (progress.bubble.arrays.length === 1) clearInterval(interval) //don't think clear interval is working
  }

})