export const findWinner = (matrix) => {
  for (let i = 0; i < 3; i++) {
    if (matrix[i][0] == matrix[i][1] && matrix[i][1] == matrix[i][2]) {
      return matrix[i][0];
    }
  }
  for (let i = 0; i < 3; i++) {
    if (matrix[0][i] == matrix[1][i] && matrix[1][i] == matrix[2][i]) {
      return matrix[0][i];
    }
  }

  if (matrix[0][0] == matrix[1][1] && matrix[1][1] == matrix[2][2]) {
    return matrix[0][0];
  }

  if (matrix[0][2] == matrix[1][1] && matrix[1][1] == matrix[2][0]) {
    return matrix[0][2];
  }

  let count = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (matrix[i][j] != 0) {
        count++;
      }
    }
  }

  if (count == 9) return -1;

  return 0;
};
