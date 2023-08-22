const eightQueens = () => {
  const result = [];

  let i = 0;
  let j = 0;
  while (true) {
    while (j < 8) {
      if (result.every((pos) => isNotChecked(pos, [i, j]))) {
        result.push([i, j]);
        i++;
        if (i >= 8) {
          return result;
        }

        j = 0;
      } else {
        j++;
      }
    }

    [i, j] = result.pop();
    j++;
  }
};

const isNotChecked = (pos1, pos2) =>
  pos1[0] !== pos2[0] &&
  pos1[1] !== pos2[1] &&
  Math.abs(pos1[0] - pos2[0]) !== Math.abs(pos1[1] - pos2[1]);

console.log(eightQueens().join('; ').toString());
