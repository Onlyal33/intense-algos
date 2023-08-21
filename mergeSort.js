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

  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
};

console.log(mergeSort(data));
console.log(data);
