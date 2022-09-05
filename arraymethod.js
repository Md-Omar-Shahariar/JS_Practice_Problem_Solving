const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 4, 5, 6];

const common = arr1.filter((a) => arr2.includes(a));

const uncommon = arr1
  .filter((a) => !arr2.includes(a))
  .concat(arr2.filter((b) => !arr1.includes(b)));

const union = [...new Set([...arr1, ...arr2])];

console.log(`Array 1:`, arr1, `Array 2:`, arr2);
console.log(`common : ${common}`);
console.log(`uncommon : ${uncommon}`);
console.log(`union : ${union}`);
