const eightQueens = () => {
  const result = [];

  let i = 0;
  let j = 0;
  while (i < 8) {
    while (j < 8 && result.some((pos) => isChecked(pos, [i, j]))) {
      if (j >= 7) {
        [i, j] = result.pop();
      }

      j++;
    }

    if (j < 8) {
      result.push([i, j]);
    }

    j = 0;
    i++;
  }

  return result;
};

const isChecked = (pos1, pos2) =>
  pos1[0] === pos2[0] ||
  pos1[1] === pos2[1] ||
  Math.abs(pos1[0] - pos2[0]) === Math.abs(pos1[1] - pos2[1]);

console.log(eightQueens());
