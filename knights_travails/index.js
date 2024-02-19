const { BOARD_SIZE, POSSIBLE_MOVES } = require('./constants');
const { isValidCell, isEqualCell } = require('./helpers');

let boardVisited = [...new Array(BOARD_SIZE)]
  .map((_) => new Array(BOARD_SIZE).fill(false));

const refreshBoard = () => {
  boardVisited = boardVisited.map(line => line.fill(false));
}

const getNextCells = (currentCell) => {
  const validNextCells = [];

  POSSIBLE_MOVES.forEach(possibleMove => {
    const [currentX, currentY] = currentCell;

    const nextX = currentX + possibleMove.xMove;
    const nextY = currentY + possibleMove.yMove;
    const nextCell = [nextX, nextY];

    if (isValidCell(nextCell)) validNextCells.push(nextCell);
  })

  return validNextCells;
}

const getUnvisitedCells = (arrayOfCells) => {
  return arrayOfCells.filter(cell => {
    return !Boolean(boardVisited[cell[0]][cell[1]]);
  })
}

const setParentCell = (cell, parentCell) => {
  boardVisited[cell[0]][cell[1]] = parentCell;
}

const reconstructPath = (startCell, endCell) => {
  let currentCell = endCell;
  const path = [currentCell];

  while (!isEqualCell(currentCell, startCell)) {
    currentCell = boardVisited[currentCell[0]][currentCell[1]];
    path.push(currentCell);
  }

  refreshBoard();
  return path.reverse();
}

const knightMoves = (startCell, endCell) => {
  setParentCell(startCell, startCell);

  const queue = [startCell];

  while (queue.length) {
    const currentCell = queue.shift();

    if (isEqualCell(currentCell, endCell)) {
      break;
    }

    const nextCells = getNextCells(currentCell);
    const unvisitedNextCells = getUnvisitedCells(nextCells);

    queue.push(...unvisitedNextCells);

    unvisitedNextCells.forEach(cell => {
      boardVisited[cell[0]][cell[1]] = currentCell;
    })
  }

  return reconstructPath(startCell, endCell);
}

console.log(knightMoves([0, 0], [3, 3]));
console.log(knightMoves([3, 3], [0, 0]));