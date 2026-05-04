class ChessBoard {
  constructor (boardSize) {
    this.board = this.generateNewBoard(boardSize);
  }

  generateNewBoard(boardSize) {
    let board = [];
    for (let i = 0; i < boardSize; i++) {
      let row = new Array(boardSize).fill(0);
      board.push(row);
    }
    return board;
  }
}

const test = new ChessBoard(8);
console.log(test.board);
