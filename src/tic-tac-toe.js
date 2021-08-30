const firstPlayer = 'x';
const secondPlayer = 'o';
/* const nextPlayer = {
  [firstPlayer]: secondPlayer,
  [secondPlayer]: firstPlayer,
}; */

class TicTacToe {
  currentPlayer = firstPlayer;
  matrix = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  constructor() {}

  getCurrentPlayerSymbol() {
    return this.currentPlayer;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.matrix[rowIndex][columnIndex]) {
      return;
    }
    this.matrix[rowIndex][columnIndex] = this.currentPlayer;
    this.currentPlayer = this.currentPlayer == 'x' ? 'o' : 'x';
  }

  isFinished() {
    return !!this.getWinner() || this.noMoreTurns();
  }

  getWinner() {}

  noMoreTurns() {
    return this.matrix.every((row) => row.every((col) => col));
  }

  isDraw() {
    return this.noMoreTurns() && !this.getWinner() ? true : false;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.matrix[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
