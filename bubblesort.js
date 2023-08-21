const data = [5, 4, 3, 2, 1];

const solution = (arr) => {
  let last = arr.length;
  while (last > 0) {
    for (let j = 0; j < last; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    last--;
  }
};
solution(data);
console.log(data);
