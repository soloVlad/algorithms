const { BOARD_SIZE, POSSIBLE_MOVES } = require('./constants');
const { isValidCell, isEqualCell } = require('./helpers');

const boardVisited = [...new Array(BOARD_SIZE)]
  .map((_) => new Array(BOARD_SIZE).fill(false));

const getNextCells = (currentCell) => {
  const validNextCells = [];

  POSSIBLE_MOVES.forEach(possibleMove => {
    const [currentX, currentY] = currentCell;

    const nextX = currentX + possibleMove.xMove;
    const nextY = currentY + possibleMove.yMove;
    const nextCell = [nextX, nextY];

    if (isValidCell(nextCell)) validNextCells.push(nextCell);
  })
}

const knightMoves = (startCell, endCell) => {
  if (isEqualCell(startCell, endCell)) return [startCell];

  const nextCells = getNextCells(startCell);
}

console.log(boardVisited);