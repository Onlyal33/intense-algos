const eightQueens = () => {
  const result = [];

  let i = 0;
  let j = 0;
  while (i < 8) {
    while (true) {
      if (j < 8 && result.every((pos) => isNotChecked(pos, [i, j]))) {
        result.push([i, j]);
        j = 0;
        break;
      }
      j++;
      if (j > 7) {
        [i, j] = result.pop();
        j++;
      }
    }
    i++;
  }

  return result;
};

const isNotChecked = (pos1, pos2) => {
  if (
    pos1[0] === pos2[0] ||
    pos1[1] === pos2[1] ||
    Math.abs(pos1[0] - pos2[0]) === Math.abs(pos1[1] - pos2[1])
  ) {
    return false;
  }
  return true;
};

console.log(eightQueens());