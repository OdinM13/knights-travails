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
    let printQueue = [];
    let bfsQueue = [];
    bfsQueue.push(startingPosition);
    printQueue.push(startingPosition);
    this.board[startingPosition[0]][startingPosition[1]] = 0; 

    while (bfsQueue.length !== 0){
      const element = bfsQueue.shift();
      let currentDis = this.board[element[0]][element[1]];
      const nextPossibleMoves = this.nextPossibleMoves(element);
      
      for (let i = 0; i < 8; i++) {
        // const nextPosition = [element[0] + nextPossibleMoves[i][0],element[1] + nextPossibleMoves[i][1]];
        const nextPosition = [nextPossibleMoves[i][0],nextPossibleMoves[i][1]];
        console.log('Next Position: ' + nextPosition);

        if (this.isValidPosition(nextPosition) && this.board[nextPosition[0]][nextPosition[1]] === -1) {
          if (nextPosition[0] === endPosition[0] && nextPosition[1] === endPosition[1]) {
            return currentDis + 1;
          }

          // this.board[nextPosition[0]][nextPosition[1]] = 0; 
          this.board[nextPosition[0]][nextPosition[1]] = currentDis + 1; 
          bfsQueue.push(nextPosition);
          printQueue.push(nextPosition);
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
console.log(test.knightMoves([0,0],[3,3]));
console.log(test.board);
