const data = [5, 4, 3, 2, 6, 1];

const mergeSort = (arr) => {
  const result = [];

  let arr1 = arr.slice(0, arr.length / 2);
  let arr2 = arr.slice(arr.length / 2, arr.length);

  if (arr1.length > 1) {
    arr1 = mergeSort(arr1);
  }

  if (arr2.length > 1) {
    arr2 = mergeSort(arr2);
  }

  while (arr1.length > 0 && arr2.length > 0) {
    result.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
  }

  result.push(...arr1, ...arr2);

  return result;
};

console.log(mergeSort(data));
console.log(data);
