function marge(left, right) {
  let margeArray = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      margeArray.push(left.shift());
    } else {
      margeArray.push(right.shift());
    }
  }

  return [...margeArray, ...left, ...right];
}

function margeSort(array) {
  const half = array.length / 2;

  // the base case is array length <=1
  if (array.length <= 1) {
    return array;
  }

  const left = array.splice(0, half); // the first half of the array
  const right = array;
  return marge(margeSort(left), margeSort(right));
}
console.log(margeSort([8, 1, 4, 5]));
