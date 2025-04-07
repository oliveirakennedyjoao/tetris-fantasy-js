import { BLOCK_SIZE, COLORS } from "../consts";
import { Block } from "./Block";

export class Board {
  constructor() {
    this.board = Array.from({ length: 15 }, () => Array(10).fill(0));

    this.block = new Block();
  }

  setBlock() {
    for (let i = 0; i < this.block.type.length; i++) {
      for (let j = 0; j < this.block.type[i].length; j++) {
        if (this.block.type[i][j] === 1) {
          this.board[this.block.i + i][this.block.j + j] = this.block.color;
        }
      }
    }
    this.checkLine();
  }

  isCollidingBoardBottom(blockBottomPosition) {
    const boardBottonPosition = this.board.length - 1;
    return blockBottomPosition === boardBottonPosition;
  }

  isCollidingSettledPiece() {
    if (this.block.i < 0) return;

    let collidingSquares = [];

    for (let i = this.block.type.length - 1; i >= 0; i--) {
      for (let j = this.block.type[0].length - 1; j >= 0; j--) {
        const squareI = this.block.i + i;
        const squareJ = this.block.j + j;

        if (
          this.block.type[i][j] === 1 &&
          this.board[squareI + 1][squareJ] !== 0
        ) {
          collidingSquares.push(true);
        }
      }
    }
    return collidingSquares.some((value) => value === true);
  }

  isColliding() {
    const blockBottomPosition = this.block.i + this.block.type.length - 1;

    if (this.isCollidingBoardBottom(blockBottomPosition)) {
      this.setBlock();
      this.block = new Block();
      return;
    }

    if (this.isCollidingSettledPiece(blockBottomPosition)) {
      this.setBlock();
      this.block = new Block();
      return;
    }
  }

  checkBlockCollision() {
    this.isColliding();
  }

  checkLine() {
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i].every((cell) => cell !== 0)) {
        this.board.splice(i, 1);
        this.board.unshift(Array(this.board[0].length).fill(0));
      }
    }
  }

  update() {
    this.checkBlockCollision();
    this.block.update();
  }

  render(ctx) {
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j] !== 0) {
          ctx.fillStyle = COLORS[this.board[i][j]];
          ctx.fillRect(j * BLOCK_SIZE, i * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
        }
      }
    }
    this.block.render(ctx);
  }

  print() {
    console.log(this.board);
  }
}
