import { BLOCK_SIZE, CANVAS_HEIGHT } from "../consts/piece";
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
          this.board[this.block.i + i][this.block.j + j] = 1;
        }
      }
    }
  }

  isColliding() {
    const blockHeight = this.block.type.length;
    const blockBottomPosition = this.block.i + this.block.type.length - 1;
    const boardBottonPosition = this.board.length - 1;

    if (blockBottomPosition === boardBottonPosition) {
      this.setBlock();
      this.block = new Block();
      return;
    }

    for (let i = this.block.type[0].length - 1; i >= 0; i--) {
      const blockLastLine = this.block.type.length - 1;
      const squareX =
        this.block.j + this.block.type[blockLastLine].length - i - 1;

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

  checkGameOver() {}

  update() {
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
