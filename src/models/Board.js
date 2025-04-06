import { BLOCK_SIZE, CANVAS_HEIGHT } from "../consts/piece";
import { Block } from "./Block";

export class Board {
  constructor() {
    this.board = Array.from({ length: 15 }, () => Array(10).fill(0));
    this.block = new Block();
  }

  setBlock() {
    const boardYPosition = this.block.y / BLOCK_SIZE + 1;
    const boardXPosition = this.block.x / BLOCK_SIZE;

    for (let i = 0; i < this.block.type.length; i++) {
      for (let j = 0; j < this.block.type[i].length; j++) {
        if (this.block.type[i][j] === 1) {
          this.board[boardYPosition + i][boardXPosition + j] = 1;
        }
      }
    }
  }

  isColliding() {
    const blockHeight = this.block.type.length;
    const blockBottomPosition = (BLOCK_SIZE * blockHeight + this.block.y) / 40;
    const boardBottonPosition = this.board.length - 1;

    console.log(blockBottomPosition);

    // Check if the block is at the bottom of the board
    if (blockBottomPosition === boardBottonPosition) {
      console.log("Colidiu com o fundo");
      this.setBlock();
      this.block = new Block();
      return;
    }

    for (let i = this.block.type[0].length - 1; i >= 0; i--) {
      const blockLastLine = this.block.type.length - 1;
      const squareX =
        this.block.x / 40 + this.block.type[blockLastLine].length - i - 1;

      if (
        this.block.type[blockLastLine][i] === 1 &&
        this.board[blockBottomPosition + 1][squareX] === 1
      ) {
        this.setBlock();
        this.block = new Block();
        return;
      }
    }
  }

  checkBlockCollision() {
    // Check if the block is at the bottom of the board
    const blockHeight = this.block.type.length;
    const blockBottomY = BLOCK_SIZE * blockHeight + this.block.y;

    if (blockBottomY === CANVAS_HEIGHT - BLOCK_SIZE) {
      // this.setBlock();
      // this.block = new Block();
      return;
    }

    if (this.board[blockBottomY / 40 + 1][this.block.x] === 1) {
      // this.setBlock();
      // this.block = new Block();
    }
  }

  checkLine() {
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i].every((cell) => cell !== 0)) {
        this.board.splice(i, 1);
        this.board.unshift(Array(this.board[0].length).fill(0));
      }
    }
  }

  checkGameOver() {}

  update() {
    this.isColliding();
    this.checkBlockCollision();
    this.block.update();
  }

  render(ctx) {
    ctx.fillStyle = "red";

    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j] === 1) {
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
