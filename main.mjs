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

  knightMoves(startingPosition, endPosition) {
    // takes a starting position e.g. [3,3] and a end position e.g. [0,0] and finds the shortest path to reach it.
    // e.g. [[3,3],[2,1],[0,0]] 
    // function to calculate nextPossibleMoves(startingPosition), that returns an adjacency list
  }
}

class Square {
  constructor (coordinates) {
    this.currentPosition = coordinates; 
    this.parent = null;
    this.children = [];
  }
}

const test = new ChessBoard(8);
console.log(test.board);
