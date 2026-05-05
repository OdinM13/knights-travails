class ChessBoard {
  constructor (boardSize) {
    this.board = this.generateNewBoard(boardSize);
    this.boardSize = boardSize;
  }

  generateNewBoard(boardSize) {
    let board = [];
    for (let i = 0; i < boardSize; i++) {
      let row = new Array(boardSize).fill(-1);
      board.push(row);
    }
    return board;
  }

  knightMoves(startingPosition, endPosition) {
    // takes a starting position e.g. [3,3] and a end position e.g. [0,0] and finds the shortest path to reach it.
    // e.g. [[3,3],[2,1],[0,0]] 
    // function to calculate nextPossibleMoves(startingPosition), that returns an adjacency list
    // Keep track of cells already visited
    // Check if one of the nextPossibleMoves is endPosition
    let bfsQueue = [];
    bfsQueue.push(startingPosition);
    this.board[startingPosition[0]][startingPosition[1]] = 0; 

    while (bfsQueue.length !== 0){
      const element = bfsQueue.shift();
      // Initialize current distance. TBD
      const nextPossibleMoves = nextPossibleMoves(element);
      
      for (let i = 0; i < 8; i++) {
        const nextPosition = [[element[0] + nextPossibleMoves[i][0]],[element[1] + nextPossibleMoves[i][1]]];

        if (isValidPosition(nextPosition) && this.board[nextPosition[0]][nextPosition[1]] === -1) {
          if (nextPosition === endPoistion) {
            // TBD: Should return the distance, not true
            return true;
          }

          // TBD mark position as visited
          bfsQueue.push(nextPosition);
        }
      }
    }
    return false;
  }

  nextPossibleMoves(startingPosition) {
    // (2,1), (2,-1), (1,-2), (-1,-2), (-2,-1), (-2,1), (-1,2), (1,2)
    const rowDelta = [2,2,1,-1,-2,-2,-1,1];
    const colDelta = [1,-1,-2,-2,-1,1,2,2];
    let nextPossibleMoves = [];

    for (let i = 0; i < rowDelta.length; i++) {
      nextPossibleMoves.push([startingPosition[0] + colDelta[i], startingPosition[1] + rowDelta[i]]);
    }
    return nextPossibleMoves;
  }

  isValidPosition(position) {
    const xPosition = position[0];
    const yPosition = position[1];
    if ((xPosition >= 0 && xPosition <= (this.boardSize - 1)) && (yPosition >= 0 && yPosition <= (this.boardSize - 1))) {
      return true;
    } else {
      return false;
    }
  }
}

const test = new ChessBoard(8);
console.log(test.board);
console.log(test.isValidPosition([-1,0]));
console.log('Next Possible Moves [3,3]: ', test.nextPossibleMoves([3,3]));
// console.log(test.knightMoves([0,0],[3,4]));
// console.log(test.board);
