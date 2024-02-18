const isValidCell = (cell) => {
  const isXValid = cell[0] >= 0 && cell[0] < BOARD_SIZE;
  const isYValid = cell[0] >= 0 && cell[0] < BOARD_SIZE;

  return isXValid && isYValid;
}

const isEqualCell = (firstCell, secondCell) => {
  return firstCell[0] === secondCell[0] && firstCell[1] === secondCell[1];
}

module.exports = {
  isValidCell,
  isEqualCell
};