const { POSSIBLE_MOVES } = require('./constants');
const { Board } = require('./board');

const getNextCells = (currentCell, board) => {
  const validNextCells = [];

  POSSIBLE_MOVES.forEach(possibleMove => {
    const [currentX, currentY] = currentCell;

    const nextX = currentX + possibleMove.xMove;
    const nextY = currentY + possibleMove.yMove;
    const nextCell = [nextX, nextY];

    if (board.checkIsValidCell(nextCell)) {
      validNextCells.push(nextCell)
    }
  })

  return validNextCells;
}

const getUnvisitedCells = (arrayOfCells, board) => {
  return arrayOfCells.filter(cell => {
    return !Boolean(board.getCell(cell));
  })
}

const knightMoves = (startCell, endCell) => {
  const board = new Board();

  board.setCell(startCell, startCell);

  const queue = [startCell];

  while (queue.length) {
    const currentCell = queue.shift();

    if (board.checkIsEqualCell(currentCell, endCell)) {
      break;
    }

    const nextCells = getNextCells(currentCell, board);
    const unvisitedNextCells = getUnvisitedCells(nextCells, board);

    queue.push(...unvisitedNextCells);

    unvisitedNextCells.forEach(cell => {
      board.setCell(cell, currentCell);
    })
  }

  return board.reconstructPath(startCell, endCell);
}

console.log(knightMoves([0, 0], [3, 3]));
console.log(knightMoves([3, 3], [0, 0]));