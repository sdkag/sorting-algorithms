document.addEventListener('DOMContentLoaded', () => {
  let array = [1, 4, 2, 5, 3, 1, 2, 3, -3]; //generate random array
  const arrEl = document.createElement('ul');
  const newArrayEl = document.createElement('input')
  const button = document.createElement('button')
  button.innerHTML = 'submit'
  document.body.appendChild(newArrayEl)
  document.body.appendChild(button)
  button.addEventListener('click', createNewArray)

  function createNewArray(event) {
    const newArray = newArrayEl.value.split(' ').map(el => Number(el))
    array = newArray
    updateArray(arrEl, newArray)
  }

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
    // myInterVal = setInterval(grabData, 1500, myInterVal)

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

  const liEls = document.querySelectorAll('li')
  function bubbleSort(array, callback, sorted = false) {
    while (!sorted) {
      sorted = true;
      array.forEach((left, i) => {
        progress.leftIndex.push(i)
        progress.arr.push(array.slice())
        if (callback(left, array[i + 1])) {
          [array[i], array[i + 1]] = [array[i + 1], array[i]]
          swap(liEls[i], liEls[i + 1])
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
    if (progress.arr.length === 1 && interval) clearInterval(interval) //don't think clear interval is working
  }

  class ArrayElement {
    constructor() {
      this.x = null;
      this.y = null;
    }
  }

  function swap(arrEl1, arrEl2) {
    arrEl1Style = new ArrayElement()
    arrEl2Style = new ArrayElement()
    arrEl1.classList.add('transition');
    arrEl2.classList.add('transition');
    arrEl1Style.x = arrEl1.getBoundingClientRect().left - arrEl2.getBoundingClientRect().left;
    arrEl1Style.y = arrEl2.getBoundingClientRect().top - arrEl1.getBoundingClientRect().top;
    arrEl2Style.x = arrEl2.getBoundingClientRect().left - arrEl1.getBoundingClientRect().left;
    arrEl2Style.y = arrEl1.getBoundingClientRect().top - arrEl2.getBoundingClientRect().top;
    arrEl1.style.transform = `translate(${arrEl1Style.x}px, ${arrEl1Style.y}px)`;
    arrEl2.style.transform = `translate(${arrEl2Style.x}px, ${arrEl2Style.y}px)`;

    setTimeout(() => {
      document.querySelector('ul').insertBefore(arrEl1, arrEl2);
      arrEl1.classList.remove('transition');
      arrEl2.classList.remove('transition');
      arrEl2.removeAttribute('style');
      arrEl1.removeAttribute('style');
    }, 300);
  }

})

// class Style {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

// }
// const arrayEls = document.querySelectorAll('.array-elements')
// arrayEls.map(el => )
// const childA = document.querySelector('#childA');
// const childB = document.querySelector('#childB');
// const finalChildAStyle = {
//   x: null,
//   y: null,
// };
// const finalChildBStyle = {
//   x: null,
//   y: null,
// };

// let swapDone = false;

// document.querySelector('button').addEventListener('click', 
// );