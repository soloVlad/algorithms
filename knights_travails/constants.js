const BOARD_SIZE = 8;

const POSSIBLE_MOVES = [
  { xMove: 2, yMove: 1 },
  { xMove: 2, yMove: -1 },
  { xMove: -2, yMove: 1 },
  { xMove: -2, yMove: -1 },
  { xMove: 1, yMove: 2 },
  { xMove: 1, yMove: -2 },
  { xMove: -1, yMove: 2 },
  { xMove: -1, yMove: -2 },
];

module.exports = {
  BOARD_SIZE,
  POSSIBLE_MOVES
}