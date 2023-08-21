const data = [5, 4, 3, 2, 1];

const solution = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minId = i;
    for (let j = i; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        minId = j + 1;
      }
    }
    [arr[i], arr[minId]] = [arr[minId], arr[i]];
  }
};
solution(data);
console.log(data);
