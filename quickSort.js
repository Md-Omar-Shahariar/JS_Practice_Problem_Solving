function QuickSort(array) {
  if (array.length <= 1) {
    return array;
  } else {
    let left = [];
    let right = [];
    let pivot = array.pop();
    let newArraay = [];

    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {
      if (array[i] <= pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
    return newArraay.concat(QuickSort(left), pivot, QuickSort(right));
  }
}

const array = [2, 3, 1, 7, 3, 1, 0];

console.log(QuickSort(array));
