const { BOARD_SIZE } = require('./constants');

class Board {
  constructor(width = BOARD_SIZE, height = BOARD_SIZE) {
    this.width = width;
    this.height = height;

    // board is used to track visited cells
    // if cell is visited, then it contains prev cell
    this.cells = [...new Array(this.width)]
      .map((_) => new Array(this.height).fill(false))
  }

  setCell(cell, value) {
    this.cells[cell[0]][cell[1]] = value;
  }

  getCell(cell) {
    return this.cells[cell[0]][cell[1]];
  }

  reconstructPath(startCell, endCell) {
    let currentCell = endCell;
    const path = [currentCell];

    while (!this.checkIsEqualCell(currentCell, startCell)) {
      currentCell = this.getCell(currentCell);
      path.push(currentCell);
    }

    return path.reverse();
  }

  checkIsValidCell(cell) {
    const [x, y] = cell;
    const isXValid = x >= 0 && x < this.width;
    const isYValid = y >= 0 && y < this.height;

    return isXValid && isYValid;
  }

  checkIsEqualCell(firstCell, secondCell) {
    const xEqual = firstCell[0] === secondCell[0];
    const yEqual = firstCell[1] === secondCell[1];

    return xEqual && yEqual;
  }
}

module.exports.Board = Board;