const data = [5, 4, 3, 2, 1];

const solution = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let toInsert = arr[i];
    let j = i;
    while (toInsert < arr[j - 1]) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = toInsert;
  }
};


solution(data);
console.log(data);
