document.addEventListener('DOMContentLoaded', () => {
  const array = [1, 4, 2, 5, 3, 1, 2, 3, -3];
  const arrEl = document.createElement('ul');

  const progress = {
    arr: [],
    leftIndex: []
  };

  updateArray(arrEl, array)
  document.body.appendChild(arrEl)
  let myInterVal

  const bubbleSortButton = document.createElement('button')
  bubbleSortButton.innerHTML = 'Bubble Sort'
  document.body.append(bubbleSortButton)
  bubbleSortButton.addEventListener('click', () => {
    bubbleSort(array, cb)
    myInterVal = setInterval(grabData, 1500, myInterVal)

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
        progress.leftIndex.push(i)
        progress.arr.push(array.slice())
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

  function grabData(interval) {
    const [arr, index] = [progress.arr.shift(), progress.leftIndex.shift()]
    updateArray(arrEl, arr)
    turnLiBlack(arr, index, index + 1)
    if (progress.arr.length === 1) clearInterval(interval) //don't think clear interval is working
  }

})